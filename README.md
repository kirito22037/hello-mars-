
=======
### npm start
npx create-react-app my-app
cd my-app
npm start
If you've previously installed create-react-app globally via npm install -g create-react-app, we recommend you uninstall the package using npm uninstall -g create-react-app to ensure that npx always uses the latest version.
Then open http://localhost:3000/ to see your app.

When you’re ready to deploy to production, create a minified bundle with npm run build.


### npx
npx create-react-app my-app
(npx comes with npm 5.2+ and higher, see instructions for older npm versions)

### npm
npm init react-app my-app
npm init <initializer> is available in npm 6+

### Yarn
yarn create react-app my-app
yarn create is available in Yarn 0.25+

### Selecting a template
You can now optionally start a new app from a template by appending --template [template-name] to the creation command.

If you don't select a template, we'll create your project with our base template.

Templates are always named in the format cra-template-[template-name], however you only need to provide the [template-name] to the creation command.

npx create-react-app my-app --template [template-name]
You can find a list of available templates by searching for "cra-template-*" on npm.

Our Custom Templates documentation describes how you can build your own template.

### Creating a TypeScript app
You can start a new TypeScript app using templates. To use our provided TypeScript template, append --template typescript to the creation command.

npx create-react-app my-app --template typescript
If you already have a project and would like to add TypeScript, see our Adding TypeScript documentation.

#Selecting a package manager
When you create a new app, the CLI will use Yarn to install dependencies (when available). If you have Yarn installed, but would prefer to use npm, you can append --use-npm to the creation command. For example:

npx create-react-app my-app --use-npm
#Output
Running any of these commands will create a directory called my-app inside the current folder. Inside that directory, it will generate the initial project structure and install the transitive dependencies:

my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
No configuration or complicated folder structures, only the files you need to build your app. Once the installation is done, you can open your project folder:

cd my-app
### Scripts
Inside the newly created project, you can run some built-in commands:

### npm start or yarn start
Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

Build errors

### npm test or yarn test
Runs the test watcher in an interactive mode. By default, runs tests related to files changed since the last commit.

Read more about testing.

### npm run build or yarn build
Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.





## Learn More

You can learn more in the [Create React App documentation]https://create-react-app.dev/docs/getting-started/

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting


### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-reactive-web-app



### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment



# Pathfinding Visualizer

Welcome to Pathfinding Visualizer! We built this application because we was fascinated by pathfinding algorithms, and we  wanted to visualize them in action. I hope that you enjoy playing around with this visualization tool just as much as I enjoyed building it. You can access it here: 
https://github.com/beardedghost45 

## Meet the Algorithms

This application supports the following algorithms: 

**Dijkstra's Algorithm** (weighted): the father of pathfinding algorithms; guarantees the shortest path

**Breath-first Search** (unweighted): a great algorithm; guarantees the shortest path

**Depth-first Search** (unweighted): a very bad algorithm for pathfinding; does not guarantee the shortest path

On top of the pathfinding algorithms listed above, I implemented a **Recursive Division** Maze Generation algorithm.

## More about the Dijkstra's algorithm 
**Dijkstra's algorithm (or Dijkstra's Shortest Path First algorithm, SPF algorithm)** is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks. It was conceived by computer scientist Edsger W. Dijkstra in 1956 and published three years later.
The algorithm exists in many variants. Dijkstra's original algorithm found the shortest path between two given nodes,[5] but a more common variant fixes a single node as the "source" node and finds shortest paths from the source to all other nodes in the graph, producing a shortest-path tree.
For a given source node in the graph, the algorithm finds the shortest path between that node and every other. It can also be used for finding the shortest paths from a single node to a single destination node by stopping the algorithm once the shortest path to the destination node has been determined. For example, if the nodes of the graph represent cities and edge path costs represent driving distances between pairs of cities connected by a direct road (for simplicity, ignore red lights, stop signs, toll roads and other obstructions), Dijkstra's algorithm can be used to find the shortest route between one city and all other cities. A widely used application of shortest path algorithm is network routing protocols, most notably IS-IS (Intermediate System to Intermediate System) and Open Shortest Path First (OSPF).

## More about the BFS algorithm


