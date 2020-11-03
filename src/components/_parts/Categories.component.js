import React from 'react';
import { observable } from "mobx";
import { observer } from "mobx-react";


@observer
class App extends React.Component {


    @observable mediaItemsInRow = 4;
    @observable arrLength = 12;


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
            <div style={{ margin: 10 }}>
                <h4>Items count: { arr.length }</h4>
                <h4>Items in row: { itemsInRow }</h4>
                <h4>Empty slots in the end of last row: { emptySlots }</h4>

                <hr/>
                <input type="number"
                       value={ this.arrLength }
                       onChange={ (e)=> this.arrLength = +e.target.value || 1  } />
                <label>arrLength</label>

                <hr/>
                <input type="number"
                       value={ this.mediaItemsInRow }
                       onChange={ (e)=> this.mediaItemsInRow = +e.target.value || 1 } />
                <label>mediaItemsInRow</label>
                <hr/>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${itemsInRow}, 1fr)`,
                    gridTemplateRows: `repeat(${itemsInRow}, 1fr)`,
                    gridColumnGap: '5px',
                    gridRowGap: '5px'
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
                                 style={{
                                     padding: 5,
                                     background: h === 1 ? 'lightgray' : 'orange',
                                     gridArea: `${y1} / ${x1} / ${y2} / ${x2}`
                                 }}>
                                {row} | y:{y1} | y:{y2}
                            </div>
                        );
                    }) }
                </div>
            </div>
        )
    }
}

export default App;
