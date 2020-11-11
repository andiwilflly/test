import React from 'react';
// MobX
import { observable } from "mobx";
import { observer } from "mobx-react";
// Components
import CategoryCard from "src/components/_parts/categories/CategoryCard.component"


@observer
class CategoriesGrid extends React.Component {

    @observable mediaItemsInRow = 4;
    @observable arrLength = 7;


    render() {
        let arr = new Array(this.arrLength).fill({ w:1, h:1 });
        const itemsInRow = arr.length < this.mediaItemsInRow ? arr.length : this.mediaItemsInRow;
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
                    gridTemplateRows: `repeat(${itemsInRow}, 1fr)`,
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
