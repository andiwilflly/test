import React from 'react';
import PropTypes from 'prop-types';
// MobX
import { observer } from "mobx-react";
import { computed } from "mobx";
// Store
import store from "src/store";
// Components
import MainCategoryCard from "src/components/_parts/categories/MainCategoryCard.component"


@observer
class MainCategoriesGrid extends React.Component {

    static propTypes = {
        cols: PropTypes.number
    };

    static defaultProps = {
        cols: 4
    };


    componentDidMount() {
        store.mainCategories.fetchAll();
    }


    @computed get mainCategories() { return store.mainCategories.list };


    render() {
        let arr = new Array(this.mainCategories.length).fill({ w:1, h:1 });
        const itemsInRow = arr.length < this.props.cols ? arr.length : this.props.cols;
        const emptySlots = Math.ceil(arr.length/itemsInRow) * itemsInRow - arr.length;
        let currX = { 0: 0 };

        arr = arr.map((item, i)=> ({
            ...item,
            h: emptySlots > i ? item.h+1 : item.h
        }));

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
                                <MainCategoryCard categoryId={ this.mainCategories[i].id }
                                                  heightRatio={ h === 1 ? 0.826 : 0 } />
                            </div>
                        );
                    }) }
                </div>
            </>
        )
    }
}

export default MainCategoriesGrid;
