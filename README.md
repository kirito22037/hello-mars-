# MARS ROVER ( path finding visualizer )

<br/>

<p align="center">
check for yourself , project is live 
<a href="http://rai-roshan.github.io/hello-mars-">here</a>
<br/>
if found helpful a ⭐ would be committable ;)
</p>

<br/>

<p align="center">
  <img src="https://user-images.githubusercontent.com/46826283/139253930-3873a874-13a6-4965-8c95-e026c1e3b96f.gif" />
</p>

## Tech Stack Used
<p align="center">
<img height="60" width="60"  src="https://user-images.githubusercontent.com/46826283/139259264-870432e2-a024-44b8-86c7-41e424f235dd.png" />

<img height="60" width="80" src="https://user-images.githubusercontent.com/46826283/139255305-a04a635f-861b-40cf-be09-a78ec57bde84.png" />

<img height="50" width="50" src="https://user-images.githubusercontent.com/46826283/139254580-65ca0157-ff44-4902-bf87-56b9e1380d92.png" />
</p>

<br/>
<nr/>

# DISCLAIMER
  This is just for learning purpose.
  Inspiration from Clément Mihailescu , you can check his tutorial for basic understatnding [here](https://www.youtube.com/watch?v=msttfIHHkak)

## WHAT'S DIFFERENT 
1. Follows function component practice.
2. Use of various react hooks.
3. Optimized by avoiding unnecesary re-rendering of components. ( cells 25*52 ) 
4. additional path finding algorithm.
5. reposition of start and end point.
6. toogle the algorithms to use diagonals paths.
7. and many more small tweaks here and there ...

<br/>
<br/>

# HOW TO RUN

1. First Open a cmd prompt or terminal in root folder of this repo and Install Node Modules and dependencies using this cmd.

> npm install

2. After all packages are installed , in a same cmd promt / terminal run this cmd.

> npm start

3. Thats it , now the programming is running on the localhost:3000.

> #THATS ALL , THANK YOU

4. To check the final build in local dev use serve package 
> npm i serve

5. now remove the "homepage" field from package.json file
6. Now run the below cmd to run your build static file in your localhost
> serve -s build

<br/>
<br/>

# Meet the Algorithms

This application supports the following algorithms: 

**Dijkstra's Algorithm** (weighted)

**Breath-first Search** (unweighted)

**Depth-first Search** (unweighted)