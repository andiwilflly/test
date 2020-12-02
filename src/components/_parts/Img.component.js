import React from "react";
import PropTypes from "prop-types";
import { ResizeObserver } from '@juggle/resize-observer';
// MobX
import { observer } from "mobx-react";
import { observable } from "mobx";


@observer
class ImgComponent extends React.Component {

    static propTypes = {
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        heightRatio: PropTypes.number,
        onLoad: PropTypes.func
    };

    static defaultProps = {
        className: '',
        style: { },
        width: 'auto',
        height: 'auto',
        ratio: null,
        onLoad: ()=> {}
    };


    $img = React.createRef();

    resizeObserver = null;
    scrollObserver = null;


    @observable img = {
        isReady: false,
        height: 0
    };


    componentDidMount() {
        if(this.props.heightRatio) this.observeHeightRatio();
        //this.observeScroll();

        this.img.isReady = true;
        setTimeout(()=> this.props.onLoad(), 0);
    }

    componentWillUnmount() {
        if(this.props.heightRatio) this.resizeObserver.unobserve(this.$img.current);
        //this.scrollObserver.unobserve(this.$img.current);
    }


    get imgHeight() { return this.img.height || this.props.height; };


    observeHeightRatio() {
        this.resizeObserver = new ResizeObserver(entries => {
            window.requestAnimationFrame(() => {
                console.log(entries, '422');
                if (!Array.isArray(entries) || !entries.length) return;
                this.img.height = entries[0].contentRect.width * this.props.heightRatio;
            });
        });
        this.resizeObserver.observe(this.$img.current);
    }


    observeScroll() {
        this.scrollObserver = new window.IntersectionObserver((entries, observer)=> {
            if(entries[0].intersectionRatio <= 0) return;
            this.img.isReady = true;
        }, {
            rootMargin: '0px',
            threshold: 0
        });

        this.scrollObserver.observe(this.$img.current);
    }


    render() {
        return (
            <div ref={this.$img}
                 style={{
                     width: this.props.width,
                     height: this.img.height || this.props.height
                 }}>

                { this.img.isReady ?
                    <img className={ this.props.className }
                         style={{
                             width: this.props.width,
                             height: this.imgHeight,
                             ...this.props.style,
                         }}
                         onLoad={ this.props.onLoad }
                         src={ this.props.src }
                         alt={ this.props.alt || 'alt' }/>
                    :
                    <div className="flex items-center justify-center"
                         style={{
                             width: this.props.width,
                             height: this.imgHeight
                         }}>Loading...</div> }
            </div>
        );
    }
}

export default ImgComponent;
