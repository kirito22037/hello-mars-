# MARS ROVER ( path finding visualizer )

<p align="center">
  <img src="https://user-images.githubusercontent.com/46826283/139253930-3873a874-13a6-4965-8c95-e026c1e3b96f.gif" />
</p>

## Tech Stack Used
<p align="center">
<img height="60" width="60"  src="https://user-images.githubusercontent.com/46826283/139259264-870432e2-a024-44b8-86c7-41e424f235dd.png" />

<img height="60" width="80" src="https://user-images.githubusercontent.com/46826283/139255305-a04a635f-861b-40cf-be09-a78ec57bde84.png" />

<img height="50" width="50" src="https://user-images.githubusercontent.com/46826283/139254580-65ca0157-ff44-4902-bf87-56b9e1380d92.png" />
</p>

# HOW TO RUN

1. First Open a cmd promt or terminal in root folder of this repo and Install Node Modules and dependencies using this cmd.

> npm install

2. After all packages are installed , in a same cmd promt / terminal run this cmd.

> npm start

3. Thats it , now the programming is running on the localhost:3000.

> #THATS ALL , THANK YOU

# Pathfinding Visualizer

Welcome to Pathfinding Visualizer! We built this application because we were fascinated by pathfinding algorithms, and we wanted to visualize them in action. we hope that you enjoy playing around with this visualization tool just as much as we enjoyed building it. You can access it here: 
https://github.com/beardedghost45 

## Meet the Algorithms

This application supports the following algorithms: 

**Dijkstra's Algorithm** (weighted): the father of pathfinding algorithms; guarantees the shortest path

**Breath-first Search** (unweighted): a great algorithm; guarantees the shortest path

**Depth-first Search** (unweighted): a very bad algorithm for pathfinding; does not guarantee the shortest path

On top of the pathfinding algorithms listed above, we implemented a **Recursive Division** Maze Generation algorithm.

## More about the Dijkstra's algorithm 
**Dijkstra's algorithm (or Dijkstra's Shortest Path First algorithm, SPF algorithm)** is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road network. It was conceived by computer scientist Edsger W. Dijkstra in 1956 and was published three years later.
The algorithm exists in many variants. Dijkstra's original algorithm found the shortest path between two given nodes, but a more common variant fixes a single node as the "source" node and finds shortest paths from the source to all other nodes in the graph, producing a shortest-path tree.
For a given source node in the graph, the algorithm finds the shortest path between that node and every other. It can also be used for finding the shortest paths from a single node to a single destination node by stopping the algorithm once the shortest path to the destination node has been determined. For example, if the nodes of the graph represent cities and edge path costs represent driving distances between pairs of cities connected by a direct road (for simplicity, ignore red lights, stop signs, toll roads and other obstructions), Dijkstra's algorithm can be used to find the shortest route between one city and all other cities. A widely used application of shortest path algorithm is network routing protocols, most notably IS-IS (Intermediate System to Intermediate System) and Open Shortest Path First (OSPF).

## More about the BFS search 
**Breadth-first search (BFS) algorithm **

Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root or some arbitrary node of a graph, sometimes referred to as a 'search key', and explores all of the neighbour nodes at the present depth prior to moving on to the nodes at the next depth level.
Input: A graph G and a starting vertex root of G

Output: Goal state. The parent links trace the shortest path back to root

1  procedure BFS(G, root) is
2      let Q be a queue
3      label root as discovered
4      Q.enqueue(root)
5      while Q is not empty do
6          v := Q.dequeue()
7          if v is the goal then
8              return v
9          for all edges from v to w in G.adjacentEdges(v) do
10             if w is not labeled as discovered then
11                 label w as discovered
12                 w.parent := v
13                 Q.enqueue(w)
