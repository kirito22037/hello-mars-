import React , { useEffect } from 'react';

import './Cell.css';

let Cell = ({ col, row , isFinish, isStart, isWall, onMouseDown, onMouseEnter, onMouseUp })=>{
    console.log(`Cell is rendered`);

    const dynamicStyleClass = isFinish ? 'cell-finish' :
    isStart ? 'cell-start' : 
    isWall ? 'cell-wall' : '';
    
    /*
    useEffect(()=>{
        console.log(`Cell ${row},${col} is  MOUNTED `);
    },[]); */

    useEffect(()=>{
        console.log('onMouseDown changed');
    },[onMouseDown]);

    useEffect(()=>{
        console.log('onMouseEnter changed');
    },[onMouseEnter]);

    return (
        <div
          id={`cell-${row}-${col}`}
          className={`cell ${dynamicStyleClass}`}
          onMouseDown={() => onMouseDown(row, col)}
          onMouseEnter={() => onMouseEnter(row, col)}
          onMouseUp={() => onMouseUp()}
          >
          </div>);};

Cell = React.memo(Cell);


export default Cell;