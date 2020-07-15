const getInitialGrid = (START_CELL_ROW,START_CELL_COL,FINISH_CELL_ROW,FINISH_CELL_COL) => {
    const grid = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push(createNode(col, row , START_CELL_ROW,START_CELL_COL,FINISH_CELL_ROW,FINISH_CELL_COL));
      }
      grid.push(currentRow);
    }
    return grid;
  };

const createNode = (col, row ,START_CELL_ROW,START_CELL_COL,FINISH_CELL_ROW,FINISH_CELL_COL) => {
return {
    row,
    col,
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

const getNewGridWithPathReset = (grid,visitedCellsInOrder)=>{
  const newGrid = grid.slice();
  for ( const cell of visitedCellsInOrder)
  {
    const node = newGrid[cell.row][cell.col];
    const newNode = {
      ...node,
      isVisited : false
    };
    newGrid[cell.row][cell.col] = newNode;
  }
  return newGrid;
};

const getNewGridWithWallsReset = (grid)=>{
  const newGrid = grid.slice();
  for ( const row of newGrid)
  {
    for( const cell of row)
    {
    const node = newGrid[cell.row][cell.col];
    const newNode = {
      ...node,
      isWall : node.isWall ? false : node.isWall,
    };
    newGrid[cell.row][cell.col] = newNode;
    }
  }
  return newGrid;
};

module.exports = {
    getInitialGrid,
    getNewGridWithPathReset,
    getNewGridWithStartToggled,
    getNewGridWithWallsReset,
    getNewGridWithWallToggled
};