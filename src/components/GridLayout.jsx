import React , { useState , useEffect , useCallback , useMemo , useRef } from 'react';
import {dijkstra, getNodesInShortestPathOrder} from '../Algorithms/dijkstra';
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

    const visitedCellsInOrder = useRef([]);
    const cellsInShortestPathOrder = useRef([]);

    

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
    };

    const resetWalls = ()=>{
      const initGrid = getInitialGrid();
      setGrid(initGrid);
    }



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
      console.log("start : ",START_CELL_ROW,START_CELL_COL);

      console.log("chnage start : ",changeStart);
      console.log("mouseIsPressed : ",mouseIsPressed);
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


    //----------------visual effect--------------
    const animateDijkstra = (visitedCellsInOrder, cellsInShortestPathOrder) => {
        for (let i = 1; i < visitedCellsInOrder.length-1; i++) {
          if (i === visitedCellsInOrder.length - 2) {
            setTimeout(() => {
              animateShortestPath(cellsInShortestPathOrder);
            }, 10 * i);
            return;
          }
          setTimeout(() => {
            const cell = visitedCellsInOrder[i];
            document.getElementById(`cell-${cell.row}-${cell.col}`).className =
              'cell cell-visited';
          }, 10 * i);
        }
      };

    const animateShortestPath = (cellsInShortestPathOrder) => {
        for (let i = 1; i < cellsInShortestPathOrder.length-1; i++) {
          setTimeout(() => {
            const cell = cellsInShortestPathOrder[i];
            document.getElementById(`cell-${cell.row}-${cell.col}`).className =
              'cell cell-shortest-path';
          }, 50 * i);
        }
      }

    const visualizeDijkstra = () => {
        const startCell = grid[START_CELL_ROW][START_CELL_COL];
        const finishCell = grid[FINISH_CELL_ROW][FINISH_CELL_COL];
        visitedCellsInOrder.current = dijkstra(grid, startCell, finishCell);
        console.log("visited cell : ",visitedCellsInOrder.current);
        cellsInShortestPathOrder.current = getNodesInShortestPathOrder(finishCell);
        console.log("shortest path : ",cellsInShortestPathOrder.current);
        animateDijkstra(visitedCellsInOrder.current, cellsInShortestPathOrder.current);
      };

    useEffect(()=>{
      console.log("--------app is mounted------------");
      const initGrid = getInitialGrid();
      setGrid(initGrid);
    },[]);
    
    //--------------JSX--------------------------
    return(
        <div className="center-layout">
            
            <button onClick={() => visualizeDijkstra()}>
                Visualize Dijkstra's Algorithm
            </button>
            <button onClick ={ ()=>setRefresh(prevState=>!prevState) }>
              render app
            </button>
            <button onClick = { resetPath }>
              Reset
            </button>
            <button onClick={ resetWalls }>
              Clear Path
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


//---------------------function definations---------------
const getInitialGrid = () => {
    const grid = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push(createNode(col, row));
      }
      grid.push(currentRow);
    }
    return grid;
  };

const createNode = (col, row) => {
return {
    col,
    row,
    isStart: row === START_CELL_ROW && col === START_CELL_COL,
    isFinish: row === FINISH_CELL_ROW && col === FINISH_CELL_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
};
};

const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

const getNewGridWithStartToggled = (grid, row ,col , changeStart ,changeFinish) =>{
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isFinish : changeFinish ? node.isStart ? node.isFinish : !node.isFinish : node.isFinish,
    isStart : changeStart ? node.isFinish ? node.isStart : !node.isStart : node.isStart,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

export default GridLayout;