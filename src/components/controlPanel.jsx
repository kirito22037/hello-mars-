import React from 'react';
import './Panel.css';

const ControlPanel = () =>{
    
    return(
        <div id="play_panel" className="panel right_panel" draggable={ true } >
            <button id="button1" className="button">Start Search</button>
            <button id="button2" className="button">Clear Path</button>
            <button id="button3" className="button">Clear Walls</button>
        </div>
    );
};

export default ControlPanel;