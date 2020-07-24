//helper fucntion to get unvisited , neigbouring nodes/cells (without walls)
const getUnvisitedNeighbors = (currentNode , grid , diagonal )=>{
    const neighbors = [];
    let s0 = false , d0 = false ,
        s1 = false , d1 = false,
        s2 = false , d2 = false,
        s3 = false , d3 = false ;


    const {row , col } = currentNode;                           
    
    if (row > 0) 
    {
        if(!grid[row - 1][col].isWall ){
        neighbors.push(grid[row - 1][col]);  //up
        s0 = true ;}

    } 
    if (col < grid[0].length - 1) 
    {
        if(!grid[row][col + 1].isWall ){
        neighbors.push(grid[row][col + 1]);
        s1 = true ;}           //front
    }
    if (row < grid.length - 1) 
    {
        if(!grid[row + 1][col].isWall ){
        neighbors.push(grid[row + 1][col]);
        s2 = true ;}              //down
    }
    if (col > 0) 
    {
        if(!grid[row][col - 1].isWall ){
        neighbors.push(grid[row][col - 1]);
        s3 = true ;}                            //back
    }

    if(diagonal === true)
    {
        d0 = s3 || s0;
        d1 = s0 || s1;
        d2 = s1 || s2;
        d3 = s2 || s3;

        if(row>0 && col>0 && row<grid.length-1 && col<grid[0].length-1)
        {
            if(d0 && !grid[row - 1][col - 1].isWall )  
            neighbors.push(grid[row - 1][col - 1]);
            
            if(d1 && !grid[row - 1][col + 1].isWall ) 
            neighbors.push(grid[row - 1][col + 1]);

            if(d2 && !grid[row + 1][col + 1].isWall )
            neighbors.push(grid[row + 1][col + 1]);

            if(d3 && !grid[row + 1][col - 1].isWall ) 
            neighbors.push(grid[row + 1][col - 1]);
        }
    }
    
    return neighbors.filter(neighbour => !neighbour.isVisited);;
};

//to get the shortest path 
const getNodesInShortestPathOrder = (finishCell)=>{

    let shortestPath = [];

    if(finishCell.previousNode === null)
    return shortestPath;
    
    let currentCell = finishCell;

    while(!currentCell.isStart)
    {
        shortestPath.push(currentCell);
        currentCell = currentCell.previousNode;
    }
    shortestPath.push(currentCell);
    
    return shortestPath.reverse();
}

export {
    getUnvisitedNeighbors,
    getNodesInShortestPathOrder
}