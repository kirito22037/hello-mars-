//import queue 
const Queue = require('./AlgoUtils/queue');
const GRID = require('./AlgoUtils/gridUtils');

//perform BREATH FIRST SEARCH 
const bfs = (grid, startNode, finishNode , diagonal)=>{
    const q = new Queue();

    let visitedNodesInOrder = [];

    startNode.isVisited = true;
    q.enqueue(startNode); 
    visitedNodesInOrder.push(startNode);
    

    while(!q.isEmpty())
    {
        const currentNode = q.dequeue();

        if(currentNode.isFinish === true)
        {
            break;
        }

        const neighbours = GRID.getUnvisitedNeighbors(currentNode,grid,diagonal);    //donot include walls
        
        for (const node of neighbours)
        {
                node.isVisited = true;
                node.previousNode = currentNode;
                q.enqueue(node);
                visitedNodesInOrder.push(node);
        }
    }
    
    return visitedNodesInOrder;
}

module.exports = {
    bfs
}