import React from "react";
import PropTypes from "prop-types";


class CategoryCard extends React.Component {

    static propTypes = {
        categoryId: PropTypes.string.isRequired
    }


    render() {
        return (
            <div>
                CategoryCard
            </div>
        );
    }
}

export default CategoryCard;