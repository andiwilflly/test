import React from "react";
import PropTypes from "prop-types";
// Styles
import "src/styles/scoped/categories/CategoryCard.scoped.scss";
// MobX
import { computed } from "mobx";
// Components
import Img from "src/components/_parts/Img.component";
//Store
import store from "src/store";


class MainCategoryCard extends React.Component {

    static propTypes = {
        categoryId: PropTypes.string.isRequired
    }


    @computed get mainCategory() { return store.mainCategories.all.get(this.props.categoryId) };


    render() {
        return (
            <div className="category-card clickable">
                <div className="category-img">
                    <Img src={ this.mainCategory.imageUrl }
                         style={{ objectFit: 'cover' }}
                         width='100%'
                         height='100%' />
                </div>
                <div className="category-name flex:center">
                    { this.mainCategory.name }
                </div>
            </div>
        );
    }
}

export default MainCategoryCard;