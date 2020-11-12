import React from 'react';
import PropTypes from 'prop-types';
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
        cols: 4,
    }



    render() {
        let arr = new Array(this.props.categoriesIds.length).fill({ w:1, h:1 });
        const itemsInRow = arr.length < this.props.cols ? arr.length : this.props.cols;
        const emptySlots = Math.ceil(arr.length/itemsInRow) * itemsInRow - arr.length;
        let currX = { 0: 0 };

        arr = arr.map((item, i)=> ({
            ...item,
            h: emptySlots > i ? item.h+1 : item.h
        }))

        let isFixedX = false;

        return (
            <>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${itemsInRow}, 1fr)`,
                    gridTemplateRows: `repeat(${Math.ceil(arr.length / itemsInRow)}, 1fr)`,
                    gridColumnGap: '20px',
                    gridRowGap: '20px'
                }}>
                    { arr.map(({ w, h }, i) => {
                        const isPrevHeight = arr[i-itemsInRow] && arr[i-itemsInRow].h === 2 && !isFixedX;
                        let row = Math.ceil((i+1) / itemsInRow);

                        if(currX[row] >= itemsInRow) row+=1;

                        currX[row] = currX[row] ? currX[row]+w : w;
                        if(isPrevHeight) isFixedX = true;
                        if(isPrevHeight) currX[row]+= emptySlots;

                        const x1 = currX[row];
                        const y1 = row;
                        const x2 =  currX[row]+w;
                        const y2 = row + h;

                        return (
                            <div key={i}
                                 style={{ gridArea: `${y1} / ${x1} / ${y2} / ${x2}` }}>
                                <CategoryCard categoryId={''+i} />
                            </div>
                        );
                    }) }
                </div>
            </>
        )
    }
}

export default CategoriesGrid;
