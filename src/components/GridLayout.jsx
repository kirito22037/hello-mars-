import React , { useState , useEffect } from 'react';
import {dijkstra, getNodesInShortestPathOrder} from '../Algorithms/dijkstra';
import Cell from './Cell';
import './GridLayout.css';

const START_CELL_ROW = 10;
const START_CELL_COL = 15;
const FINISH_CELL_ROW = 10;
const FINISH_CELL_COL = 35;


//---------------React Functional Component--------------------
const GridLayout = ()=>{
    console.log("GRIDLAYOUT rendered");   //for debug----

    const [grid , setGrid] = useState([]);
    const [mouseIsPressed , setMIP] = useState(false);
    
    useEffect(()=>{
        const initGrid = getInitialGrid();
        setGrid(initGrid);
    },[]);

    //--------------mouse control utilities-------------------
    const handleMouseDown = (row, col) => {
        const newGrid = getNewGridWithWallToggled(grid, row, col);
        setGrid(newGrid);
        setMIP(true);
      }
    
    const handleMouseEnter = (row, col) => {
    if (!mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(grid, row, col);
    setGrid(newGrid);
    }

    const handleMouseUp = () => {
    setMIP(false);
    }


    //----------------visual effect--------------
    const animateDijkstra = (visitedCellsInOrder, cellsInShortestPathOrder) => {
        for (let i = 0; i <= visitedCellsInOrder.length; i++) {
          if (i === visitedCellsInOrder.length) {
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
        for (let i = 0; i < cellsInShortestPathOrder.length; i++) {
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
        const visitedCellsInOrder = dijkstra(grid, startCell, finishCell);
        const cellsInShortestPathOrder = getNodesInShortestPathOrder(finishCell);
        animateDijkstra(visitedCellsInOrder, cellsInShortestPathOrder);
      };

    
    //--------------JSX--------------------------
    return(
        <div className="center-layout">
            
            <button onClick={() => visualizeDijkstra()}>
                Visualize Dijkstra's Algorithm
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
                            isFinish={isFinish}
                            isStart={isStart}
                            isWall={isWall}
                            mouseIsPressed={mouseIsPressed}
                            onMouseDown={(row, col) => handleMouseDown(row, col)}
                            onMouseEnter={(row, col) =>
                                handleMouseEnter(row, col)
                            }
                            onMouseUp={() => handleMouseUp()}
                            row={row}/>
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

export default GridLayout;