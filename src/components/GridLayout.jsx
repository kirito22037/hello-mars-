import React , { useState , useEffect , useCallback , useMemo , useRef } from 'react';

//------------shortset path visualiser----------------
import {visualizeBFS,
  visualizeDijkstra} from '../components_utils/visualizeAlgo';

//------------component utils-----------------
import {
  getInitialGrid,
  getNewGridWithPathReset,
  getNewGridWithStartToggled,
  getNewGridWithWallsReset,
  getNewGridWithWallToggled
} from '../components_utils/gridToggle';

//---------child component-------------------
import Cell from './Cell';
import './GridLayout.css';

let START_CELL_ROW = 10;
let START_CELL_COL = 15;
let FINISH_CELL_ROW = 10;
let FINISH_CELL_COL = 35;


//---------------React Functional Component--------------------
const GridLayout = ()=>{
    console.log("GRIDLAYOUT rendered");   //for debug----

    const [grid , setGrid] = useState([]);
    const [refresh , setRefresh] = useState(true);                  //for debug purpose
    
    let mouseIsPressed = false;
    let changeStart = false;
    let changeFinish = false;

    let visitedCellsInOrder = useRef([]);
    let cellsInShortestPathOrder = useRef([]);

    

    //---------------reset path and walls-----------------------------------
    const resetPath = ()=>{
      console.log("visited : ",visitedCellsInOrder.current);
      for (let i = 0; i < visitedCellsInOrder.current.length; i++) {
        setTimeout(() => {
          const cell = visitedCellsInOrder.current[i];
          document.getElementById(`cell-${cell.row}-${cell.col}`).classList.remove(`cell-visited`);
          document.getElementById(`cell-${cell.row}-${cell.col}`).classList.remove(`cell-shortest-path`);
        }, 2 * i);
      }
      setGrid(getNewGridWithPathReset(grid,visitedCellsInOrder.current));
    };

    const resetWalls = ()=>{
      const wallResetGrid = getNewGridWithWallsReset(grid);
      setGrid(wallResetGrid);
    };



    //--------------mouse control utilities-------------------
    const handleMouseDown = useCallback((row, col) => {

        if(row === START_CELL_ROW && col === START_CELL_COL)
        {
          changeStart = true;
        }
        else if(row === FINISH_CELL_ROW && col === FINISH_CELL_COL)
        {
          changeFinish = true;
        }
        else
        {
          setGrid(prevGrid=>{
            const newGrid = getNewGridWithWallToggled(prevGrid, row, col);
            return newGrid;
          });
        }
        //mouseIsPressed.current = true ;
        mouseIsPressed = true ;
      },[]);
    
    
    const handleMouseEnter = useCallback((row, col) => {
      //console.log("start : ",START_CELL_ROW,START_CELL_COL);

      //console.log("chnage start : ",changeStart);
      //console.log("mouseIsPressed : ",mouseIsPressed);
      if (!mouseIsPressed) return;

      if(changeStart || changeFinish)
      {
        if(changeStart)
        { 
          START_CELL_ROW = row;
          START_CELL_COL = col;
        }
        else 
        {
          FINISH_CELL_ROW = row;
          FINISH_CELL_COL = col;
        }
        setGrid(prevGrid=>{
          const newGrid = getNewGridWithStartToggled(prevGrid, row ,col , changeStart , changeFinish);
          return newGrid;
        })
      }
      else
      {
        setGrid(prevGrid=>{
          const newGrid = getNewGridWithWallToggled(prevGrid, row, col);
          return newGrid;
        });
      }
    },[]);

    const handleMouseLeave = useCallback((row,col)=>{
      if(changeStart || changeFinish)
      {
        setGrid(prevGrid=>{
          const newGrid = getNewGridWithStartToggled(prevGrid, row ,col , changeStart , changeFinish);
          return newGrid;
        })
      }
    },[]);

    const handleMouseUp = useCallback(() => {
    //mouseIsPressed.current = false;
    mouseIsPressed = false;
    changeStart = false;
    changeFinish =  false;
    },[]);

    
    const handleDijkastraVisual = ()=>{
      let result = visualizeDijkstra(grid,START_CELL_ROW,START_CELL_COL,FINISH_CELL_ROW,FINISH_CELL_COL);
      
      visitedCellsInOrder.current = result.visitedCellsInOrder;
      cellsInShortestPathOrder.current = result.cellsInShortestPathOrder;
    };

    const handleBfsVisual = () =>{
      let result = visualizeBFS(grid,START_CELL_ROW,START_CELL_COL,FINISH_CELL_ROW,FINISH_CELL_COL);
      
      visitedCellsInOrder.current = result.visitedCellsInOrder;
      cellsInShortestPathOrder.current = result.cellsInShortestPathOrder;
    };

    useEffect(()=>{
      console.log("--------app is mounted------------");
      const initGrid = getInitialGrid(START_CELL_ROW,START_CELL_COL,FINISH_CELL_ROW,FINISH_CELL_COL);
      setGrid(initGrid);
    },[]);
    
    //--------------JSX--------------------------
    return(
        <div className="center-layout">
            
            <button 
            onClick={() => handleDijkastraVisual() }>
                Visualize Dijkstra's Algorithm
            </button>
            <button 
            onClick={() => handleBfsVisual() }>
                Visualize BFS Algorithm
            </button>
            <button onClick ={ ()=>setRefresh(prevState=>!prevState) }>          //for debug 
              render app
            </button>
            <button onClick = { resetPath }>
              Reset
            </button>
            <button onClick={ resetWalls }>
              Reset Walls
            </button>

            <div className="grid">
            {grid.map((row, rowIdx) => {
                return (
                <div key={rowIdx}>
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