import React from 'react';

import './Cell.css';

let Cell = ({ col, row , isFinish, isStart, isWall, onMouseDown, onMouseEnter, onMouseLeave , onMouseUp })=>{
    console.log(`Cell is rendered`);

    const dynamicStyleClass = isFinish ? 'cell-finish' :
    isStart ? 'cell-start' : 
    isWall ? 'cell-wall' : '';

    return (
        <div
          id={`cell-${row}-${col}`}
          className={`cell ${dynamicStyleClass}`}
          onMouseDown={() => onMouseDown(row, col)}
          onMouseEnter={() => onMouseEnter(row, col)}
          onMouseLeave={ () => onMouseLeave(row , col)}
          onMouseUp={() => onMouseUp()}
          >
          </div>);};

Cell = React.memo(Cell);


export default Cell;