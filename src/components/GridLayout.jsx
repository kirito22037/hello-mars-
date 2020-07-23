import React , { useContext } from 'react';
import { GridContext } from '../context/GridContext';
import './GridLayout.css';

//---------child component-------------------
import Cell from './Cell';



//---------------React Functional Component--------------------
const GridLayout = ()=>{

    const { grid , handleMouseDown , handleMouseEnter
      , handleMouseLeave , handleMouseUp } = useContext(GridContext);
     
    
    //--------------JSX--------------------------
    return(
        <div className="center-layout">
            
            <div className="grid">
            {grid.map((row, rowIdx) => {
                return (
                <div key={rowIdx} className="row">
                    {row.map((node, nodeIdx) => {
                    const {row, col, isFinish, isStart, isWall} = node;
                        return (
                            <Cell
                            key={nodeIdx}
                            col={col}
                            row={row}
                            isFinish={isFinish}
                            isStart={isStart}
                            isWall={isWall}
                            onMouseDown={ handleMouseDown }
                            onMouseEnter={ handleMouseEnter }
                            onMouseLeave={ handleMouseLeave }
                            onMouseUp={ handleMouseUp }
                            />
                        );
                    })}
                </div>
                );
            })}
            </div>
        </div>
    )
};


export default GridLayout;