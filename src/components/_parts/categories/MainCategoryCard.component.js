import React from "react";
import PropTypes from "prop-types";
// Styles
import "src/styles/scoped/categories/CategoryCard.scoped.scss";
// MobX
import { computed } from "mobx";
//Store
import store from "src/store";
// Components
import Img from "src/components/_parts/Img.component";
import Link from "src/components/Link.component";


class MainCategoryCard extends React.Component {

    static propTypes = {
        categoryId: PropTypes.string.isRequired
    };


    @computed get mainCategory() { return store.mainCategories.all.get(this.props.categoryId) };


    render() {
        return (
            <Link to={ `/${store.lang}/category/${this.mainCategory.id}` } className="category-card clickable">
                <div className="category-img">
                    <Img src={ this.mainCategory.imageUrl }
                         width='100%'
                         height='100%'
                         style={{ objectFit: 'cover' }}
                         heightRatio={ this.props.heightRatio } />
                </div>
                <div className="category-name flex:center">
                    { this.mainCategory.name }
                </div>
            </Link>
        );
    }
}

export default MainCategoryCard;
