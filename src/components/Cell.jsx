import React , { useEffect } from 'react';

import './Cell.css';

const Cell = ({ col, row , isFinish, isStart, isWall, onMouseDown, onMouseEnter, onMouseUp })=>{
    console.log(`Cell ${row},${col} is rendered`);
    
    const dynamicStyleClass = isFinish ? 'cell-finish' :
    isStart ? 'cell-start' : 
    isWall ? 'cell-wall' : '';
    
    useEffect(()=>{
        console.log(`Cell ${row},${col} is MOUNTED `);
    },[]);

    return (
        <div
          id={`cell-${row}-${col}`}
          className={`cell ${dynamicStyleClass}`}
          onMouseDown={() => onMouseDown(row, col)}
          onMouseEnter={() => onMouseEnter(row, col)}
          onMouseUp={() => onMouseUp()}></div>
      );
};

export default Cell;