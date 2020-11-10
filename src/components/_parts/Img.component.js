import React from "react";
import PropTypes from "prop-types";
import Img from 'react-cool-img';



class ImgComponent extends React.Component {

    static propTypes = {
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    }


    static defaultProps = {
        width: 'auto',
        height: 'auto'
    }


    render() {
        return (
            <Img
                style={{ width: this.props.width, height: this.props.height }}
                placeholder={<div>placeholder</div>}
                src={ this.props.src }
                error={<div>error loading image</div>}
                alt={ this.props.alt || this.props.src }
            />
        );
    }
}

export default ImgComponent;