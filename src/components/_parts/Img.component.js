import React from "react";
import PropTypes from "prop-types";
import Img from 'react-cool-img';



class ImgComponent extends React.Component {

    static propTypes = {
        src: PropTypes.string.isRequired,
        alt: PropTypes.string
    }


    render() {
        return (
            <Img
                placeholder={<div>placeholder</div>}
                src={ this.props.src }
                error={<div>error loading image</div>}
                alt={ this.props.alt || this.props.src }
            />
        );
    }
}

export default ImgComponent;