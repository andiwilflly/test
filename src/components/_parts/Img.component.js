import React from "react";
import PropTypes from "prop-types";
import Img from 'react-cool-img';



class ImgComponent extends React.Component {

    static propTypes = {
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        onLoad: PropTypes.func
    };


    static defaultProps = {
        className: '',
        style: {},
        width: 'auto',
        height: 'auto',
        onLoad: ()=> {}
    };


    render() {
        return (
            <Img className={ this.props.className }
                 style={{
                     width: this.props.width,
                     height: this.props.height,
                     ...this.props.style,
                 }}
                 onLoad={ this.props.onLoad }
                 placeholder={<div>placeholder</div>}
                 src={ this.props.src }
                 error={<div>error loading image</div>}
                 alt={ this.props.alt || this.props.src }
            />
        );
    }
}

export default ImgComponent;
