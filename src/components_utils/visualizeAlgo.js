import dijkstra from '../Algorithms/dijkstra';
import bfs from '../Algorithms/bfs';
const { getNodesInShortestPathOrder } = require('../Algorithms/AlgoUtils/gridUtils');

    //animate the iterartion path of algorithm
    const animateAlgo = (visitedCellsInOrder, cellsInShortestPathOrder) => {
        for (let i = 0; i < visitedCellsInOrder.length; i++) {
          if (i === visitedCellsInOrder.length-1) {
            setTimeout(() => {
              animateShortestPath(cellsInShortestPathOrder);
            }, 7 * i);
            return;
          }
          setTimeout(() => {
            const cell = visitedCellsInOrder[i];
            if(cell.isStart === false && cell.isFinish === false )
            {
              document.getElementById(`cell-${cell.row}-${cell.col}`).className =
              'cell cell-visited';
            }
          }, 7 * i);
        }
      };

    //animate the shortest path
    const animateShortestPath = (cellsInShortestPathOrder) => {
        for (let i = 0; i < cellsInShortestPathOrder.length; i++) {
          setTimeout(() => {
            const cell = cellsInShortestPathOrder[i];
            if(cell.isStart === false && cell.isFinish === false )
            {
              document.getElementById(`cell-${cell.row}-${cell.col}`).className =
              'cell cell-shortest-path';
            }
          }, 50 * i);
        }
      }

    //to visualize the Dijkastra algorithm
    const visualizeDijkstra = (grid,
      diagonal,
      START_CELL_ROW,
      START_CELL_COL,
      FINISH_CELL_ROW,
      FINISH_CELL_COL) => {
  
        const startCell = grid[START_CELL_ROW][START_CELL_COL];
        const finishCell = grid[FINISH_CELL_ROW][FINISH_CELL_COL];
  
        let visitedCellsInOrder = dijkstra(grid, startCell, finishCell , diagonal);        
        let cellsInShortestPathOrder = getNodesInShortestPathOrder(finishCell);
        animateAlgo(visitedCellsInOrder, cellsInShortestPathOrder);

        return {
            visitedCellsInOrder,
            cellsInShortestPathOrder
        };
      };

      //to animate the BFS algo
      const visualizeBFS = (grid,
        diagonal,
        START_CELL_ROW,
        START_CELL_COL,
        FINISH_CELL_ROW,
        FINISH_CELL_COL) => {
        const startCell = grid[START_CELL_ROW][START_CELL_COL];
        const finishCell = grid[FINISH_CELL_ROW][FINISH_CELL_COL];
        
        let visitedCellsInOrder = bfs(grid, startCell, finishCell , diagonal );
        let cellsInShortestPathOrder = getNodesInShortestPathOrder(finishCell);
        animateAlgo(visitedCellsInOrder, cellsInShortestPathOrder);

        return {
            visitedCellsInOrder,
            cellsInShortestPathOrder
        };
      };


export {
    visualizeBFS,
    visualizeDijkstra
};