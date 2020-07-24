
//-----------------inititalize the GRID state--------------------
const getInitialGrid = (START_CELL_ROW,START_CELL_COL,FINISH_CELL_ROW,FINISH_CELL_COL) => {
    const grid = [];
    for (let row = 0; row < 25; row++) {
      const currentRow = [];
      for (let col = 0; col < 52; col++) {
        currentRow.push(createNode(col, row , START_CELL_ROW,START_CELL_COL,FINISH_CELL_ROW,FINISH_CELL_COL));
      }
      grid.push(currentRow);
    }
    return grid;
  };

  //------------------------create individual node/cell with default property---------------------------
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

//--------------to change a wall property of a cell----------------------------
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

//-----------------------to change start and end point------------------------
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

//---------------------------to reset path-----------------------------------------
const getNewGridWithPathReset = (grid,visitedCellsInOrder)=>{
  const newGrid = grid.slice();
  for ( const row of newGrid)
  {
    for( const cell of row)
    {
    const node = newGrid[cell.row][cell.col];
    const newNode = {
      ...node,
      distance: Infinity,
      isVisited : false,
      previousNode: null,
    };
    newGrid[cell.row][cell.col] = newNode;
    }
  }
  
  return newGrid;
};

//-------------------reset wall/obstecles-----------------------
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


export {
    getInitialGrid,
    getNewGridWithPathReset,
    getNewGridWithStartToggled,
    getNewGridWithWallsReset,
    getNewGridWithWallToggled
};