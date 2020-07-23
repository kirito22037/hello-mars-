import React , { useContext } from 'react';
import {GridContext } from '../GridContext';
import {visualizeBFS, visualizeDijkstra} from '../components_utils/visualizeAlgo';
import './Panel.css';

const ControlPanel = () =>{
    
    const { resetPath , 
            resetWalls ,
            visitedCellsInOrder , 
            cellsInShortestPathOrder } = useContext(GridContext);
    const { grid ,
            START_CELL_ROW , 
            START_CELL_COL , 
            FINISH_CELL_ROW , 
            FINISH_CELL_COL } = useContext(GridContext);

     //-------------------algo -------------------
     const handleDijkastraVisual = ()=>{
        let result = visualizeDijkstra(grid,START_CELL_ROW.current,START_CELL_COL.current,FINISH_CELL_ROW.current,FINISH_CELL_COL.current);
        
        visitedCellsInOrder.current = result.visitedCellsInOrder;
        cellsInShortestPathOrder.current = result.cellsInShortestPathOrder;
      };
  
      const handleBfsVisual = () =>{
        let result = visualizeBFS(grid,START_CELL_ROW.current,START_CELL_COL.current,FINISH_CELL_ROW.current,FINISH_CELL_COL.current);
        
        visitedCellsInOrder.current = result.visitedCellsInOrder;
        cellsInShortestPathOrder.current = result.cellsInShortestPathOrder;
      };


    return(
        <div id="play_panel" className="panel center_panel" draggable={ true } >
            <button 
            id="button1" 
            className="button"
            onClick={ handleBfsVisual }>BFS Search</button>
            <button 
            id="button2" 
            className="button"
            onClick={ handleDijkastraVisual }>Dijikastra Search</button>
            <button 
            id="button3" 
            className="button"
            onClick={ resetPath } >Clear Path</button>
            <button 
            id="button4" 
            className="button"
            onClick={ resetWalls }>Clear Walls</button>
        </div>
    );
};

export default ControlPanel;