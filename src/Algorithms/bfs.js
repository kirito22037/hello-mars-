const Queue = require('./AlgoUtils/queue');

let visitedNodesInOrder = [];
let shortestPath = [];


const bfs = (grid, startNode, finishNode)=>{
    console.log("grid rece : ",grid);
    const q = new Queue();

    visitedNodesInOrder = [];
    shortestPath = [];

    console.log("startNode : ",startNode);
    console.log("finsihNode : ",finishNode);
    console.log("grid : ",grid);

    startNode.isVisited = true;
    q.enqueue(startNode); 
    visitedNodesInOrder.push(startNode);
    

    while(!q.isEmpty())
    {
        //console.log("queue : ",q.printQueue());
        const currentNode = q.dequeue();

        if(currentNode.isFinish === true)
        {
            break;
        }

        const neighbours = getNeighbours(currentNode,grid);    //donot include walls
        //console.log("neighbours : ", neighbours);

        for (const node of neighbours)
        {
            if(node.isVisited === false) 
            {
                node.isVisited = true;
                node.previousNode = currentNode;
                q.enqueue(node);
                //console.log("endueued : ",node);
                visitedNodesInOrder.push(node);
            }
        }
    }

    console.log("visitedNodesInOrder : ",visitedNodesInOrder);
    return visitedNodesInOrder;
}


function getNeighbours(currentNode , grid)
{
    const neighbours = [];
    const {row , col } = currentNode;

    //console.log("current node : ",currentNode);                           
    
    if (col < grid[0].length - 1) 
    {
        if(grid[row][col + 1].isWall === false) neighbours.push(grid[row][col + 1]);           //front
    }
    if (col > 0) 
    {
        if(grid[row][col - 1].isWall === false) neighbours.push(grid[row][col - 1]);                            //back
    }
    if (row < grid.length - 1) 
    {
        if(grid[row + 1][col].isWall === false) neighbours.push(grid[row + 1][col]);              //down
    }
    if (row > 0) 
    {
        if(grid[row - 1][col].isWall === false)  neighbours.push(grid[row - 1][col]);  //up
    } 

    return neighbours;
};

function getNodesInShortestPathOrderBfs(finishCell){
    const {row , col} = finishCell;

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

module.exports = {
    bfs,
    getNodesInShortestPathOrderBfs
}