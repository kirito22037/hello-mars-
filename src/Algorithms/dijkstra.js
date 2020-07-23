const GRID = require('./AlgoUtils/gridUtils');

// Performs Dijkstra's algorithm
const dijkstra = (grid, startNode, finishNode , diagonal) => {
  
  const visitedNodesInOrder = [];
  startNode.distance = 0;
  const unvisitedNodes = getAllNodes(grid);

  while (unvisitedNodes.length) {
    sortNodesByDistance(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();
    if (closestNode.distance === Infinity) return visitedNodesInOrder;
    closestNode.isVisited = true;
    visitedNodesInOrder.push(closestNode);
    if (closestNode === finishNode) return visitedNodesInOrder;
    updateUnvisitedNeighbors(closestNode, grid, diagonal);
  }
}

const sortNodesByDistance = (unvisitedNodes) => {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
  console.log("unvisited : ", unvisitedNodes);
}

const updateUnvisitedNeighbors = (node, grid, diagonal) => {
  const unvisitedNeighbors = GRID.getUnvisitedNeighbors(node, grid , diagonal);
  console.log("unvis neigh : ",unvisitedNeighbors);
  for (const neighbor of unvisitedNeighbors) {
    if(neighbor.distance === Infinity)
    { 
      neighbor.distance = node.distance + 1;
      neighbor.previousNode = node;
    }
  }
}

const getAllNodes = (grid) => {
  const nodes = [];
  for (const row of grid) {
    for (const node of row) {
      nodes.push(node);
    }
  }
  return nodes;
}

module.exports = {
  dijkstra
};
