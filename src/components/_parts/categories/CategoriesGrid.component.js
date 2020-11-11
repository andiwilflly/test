import React from 'react';
import PropTypes from 'prop-types';
// MobX
import { observable, computed } from "mobx";
import { observer } from "mobx-react";
// Components
import CategoryCard from "src/components/_parts/categories/CategoryCard.component"


@observer
class CategoriesGrid extends React.Component {

    static propTypes = {
        categoriesIds: PropTypes.array.isRequired,
        cols: PropTypes.number
    }

    static defaultProps = {
        cols: 4
    }


    @observable arrLength = 7;

    isFixedX = false;


    @computed get categories() { return this.props.categoriesIds };
    @computed get itemsInRow() { return this.categories.length < this.props.cols ? this.categories.length : this.props.cols; };
    @computed get emptySlots() { return Math.ceil(this.categories.length/this.itemsInRow) * this.itemsInRow - this.categories.length; };
    @computed get grid() {
        return new Array(this.categories.length).fill({ w:1, h:1 }).map((item, i)=> ({
            ...item,
            h: this.emptySlots > i ? item.h+1 : item.h
        }))
    }


    render() {
        let currX = { 0: 0 };

        return (
            <>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${this.itemsInRow}, 1fr)`,
                    gridTemplateRows: `repeat(${this.itemsInRow}, 1fr)`,
                    gridColumnGap: '20px',
                    gridRowGap: '20px'
                }}>
                    { this.grid.map(({ w, h }, i) => {
                        const isPrevHeight = this.grid[i-this.itemsInRow] && this.grid[i-this.itemsInRow].h === 2 && !this.isFixedX;
                        let row = Math.ceil((i+1) / this.itemsInRow);

                        if(currX[row] >= this.itemsInRow) row+=1;

                        currX[row] = currX[row] ? currX[row]+w : w;
                        if(isPrevHeight) this.isFixedX = true;
                        if(isPrevHeight) currX[row]+= this.emptySlots;

                        const x1 = currX[row];
                        const y1 = row;
                        const x2 =  currX[row]+w;
                        const y2 = row + h;

                        return (
                            <div key={i}
                                 style={{ gridArea: `${y1} / ${x1} / ${y2} / ${x2}` }}>
                                <CategoryCard categoryId={i} />
                            </div>
                        );
                    }) }
                </div>
            </>
        )
    }
}

export default CategoriesGrid;
