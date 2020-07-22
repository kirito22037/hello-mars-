import React , { useContext } from 'react';
import { GridContext } from '../GridContext';


//---------child component-------------------
import Cell from './Cell';
import './GridLayout.css';


//---------------React Functional Component--------------------
const GridLayout = ()=>{
    console.log("GRIDLAYOUT rendered");   //for debug----
    

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