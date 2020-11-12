import React from "react";
import PropTypes from "prop-types";
// Styles
import "src/styles/scoped/categories/CategoryCard.scoped.scss";
// Components
import Img from "src/components/_parts/Img.component";


class CategoryCard extends React.Component {

    static propTypes = {
        categoryId: PropTypes.string.isRequired
    }


    render() {
        return (
            <div className="category-card clickable">
                <div className="category-img">
                    <Img src={`${process.env.PUBLIC_URL}/static/category1.jpg`}
                         style={{ objectFit: 'cover' }}
                         width='100%'
                         height='100%' />
                </div>
                <div className="category-name flex:center">Name</div>
            </div>
        );
    }
}

export default CategoryCard;