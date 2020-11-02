import React from 'react';


class App extends React.Component {

    render() {
        const mediaItemsInRow = 4;

        let arr = [{w:1,h:1}, {w:1,h:1}, {w:1,h:1}, {w:1,h:1}, {w:1,h:1},  {w:1,h:1}];
        const itemsInRow = arr.length < mediaItemsInRow ? arr.length : mediaItemsInRow;
        const emptySlots = Math.ceil(arr.length/itemsInRow) * itemsInRow - arr.length;
        let currX = { 0: 0 };

        arr = arr.map((item, i)=> ({
            ...item,
            h: emptySlots > i ? item.h+1 : item.h
        }))

        console.log(emptySlots, 'emptySlots');
        console.log(itemsInRow, 'itemsInRow');

        return (
            <div style={{
                margin: 5,
                display: 'grid',
                gridTemplateColumns: `repeat(${itemsInRow}, 1fr)`,
                gridTemplateRows: `repeat(${itemsInRow}, 1fr)`,
                gridColumnGap: '5px',
                gridRowGap: '5px'
            }}>
                { arr.map(({ w, h }, i) => {
                    let x = 0;

                    while(x < 10 && arr[(i+x)-itemsInRow]?.h === 2) {
                        console.log('||||', x);
                        x+=1;
                    }

                    const isPrevHeight = arr[i-itemsInRow]?.h === 2;

                    const row = Math.ceil((i+1) / itemsInRow);

                    console.log(currX[row] || w, isPrevHeight, 'x:', x);

                    currX[row] = currX[row] ? currX[row]+w : w;
                    if(isPrevHeight) currX[row]+= emptySlots;

                    const x1 = currX[row];
                    const y1 = row;
                    const x2 =  currX[row]+w;
                    const y2 = row + h;

                    return (
                        <div key={i}
                             style={{
                                 background: h === 1 ? 'gray' : 'orange',
                                 gridArea: `${y1} / ${x1} / ${y2} / ${x2}`
                             }}>
                            {i} | h:{h}
                            {/*{ `x:${x1} y:${y1} / x:${x2} y:${y2}` }*/}
                        </div>
                    );
                }) }
            </div>
        )
    }
}

export default App;
