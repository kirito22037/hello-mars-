import React from 'react';

const AlgoPanel = () =>{

    return(
        <div id="algorithm_panel" className="panel right_panel">
            <header><h2 className="header_title">Select Algorithm</h2></header>

            <div className="accordion">
                <h3 id="astar_header"><a href="#">A*</a></h3>
                <div id="astar_section" className="finder_section">
                    <header className="option_header">
                        <h3>Heuristic</h3>
                    </header>
                    <div id="astar_heuristic" className="sub_options">
                        <input type="radio" name="astar_heuristic" value="manhattan" checked />
                        <label className="option_label">Manhattan</label> <br/>
                        <input type="radio" name="astar_heuristic" value="euclidean"/>
                        <label className="option_label">Euclidean</label> <br/>
                        <input type="radio" name="astar_heuristic" value="octile"/>
                        <label className="option_label">Octile</label> <br/>
                        <input type="radio" name="astar_heuristic" value="chebyshev"/>
                        <label className="option_label">Chebyshev</label> <br/>
                    </div>

                    <header className="option_header">
                        <h3>Options</h3>
                    </header>
                    <div className="optional sub_options">
                        <input type="checkbox" className="allow_diagonal" checked/>
                        <label className="option_label">Allow Diagonal</label> <br/>
                        <input type="checkbox" className="bi-directional"/>
                        <label className="option_label">Bi-directional</label> <br/>
                        <input type="checkbox" className="dont_cross_corners"/>
                        <label className="option_label">Don't Cross Corners</label> <br/>
                        <input className="spinner" name="astar_weight" value="1"/>
                        <label className="option_label">Weight</label> <br/>
                    </div>
                </div>

                <h3 id="ida_header"><a href="#">IDA*</a></h3>
                <div id="ida_section" className="finder_section">
                <header className="option_header">
                    <h3>Heuristic</h3>
                </header>
                <div id="ida_heuristic" className="sub_options">
                    <input type="radio" name="ida_heuristic" value="manhattan" checked />
                    <label className="option_label">Manhattan</label> <br/>
                    <input type="radio" name="ida_heuristic" value="euclidean"/>
                    <label className="option_label">Euclidean</label> <br/>
                    <input type="radio" name="ida_heuristic" value="octile"/>
                    <label className="option_label">Octile</label> <br/>
                    <input type="radio" name="ida_heuristic" value="chebyshev"/>
                    <label className="option_label">Chebyshev</label> <br/>
                </div>
                <header className="option_header">
                    <h3>Options</h3>
                </header>
                <div className="optional sub_options">
                    <input type="checkbox" className="allow_diagonal" checked/>
                    <label className="option_label">Allow Diagonal</label> <br/>
                    <input type="checkbox" className="dont_cross_corners"/>
                    <label className="option_label">Don't Cross Corners</label> <br/>
                    <input className="spinner" name="astar_weight" value="1"/>
                    <label className="option_label">Weight</label> <br/>
                    <input className="spinner" name="time_limit" value="10"/>
                    <label className="option_label">Seconds limit</label> <br/>
                    <input type="checkbox" className="track_recursion" checked />
                    <label className="option_label">Visualize recursion</label> <br/>
                </div>
                </div>

                <h3 id="breadthfirst_header"><a href="#">Breadth-First-Search</a></h3>
                <div id="breadthfirst_section" className="finder_section">
                <header className="option_header">
                    <h3>Options</h3>
                </header>
                <div className="optional sub_options">
                    <input type="checkbox" className="allow_diagonal" checked/>
                    <label className="option_label">Allow Diagonal</label> <br/>
                    <input type="checkbox" className="bi-directional"/>
                    <label className="option_label">Bi-directional</label> <br/>
                    <input type="checkbox" className="dont_cross_corners"/>
                    <label className="option_label">Don't Cross Corners</label> <br/>
                </div>
                </div>

                <h3 id="bestfirst_header"><a href="#">Best-First-Search</a></h3>
                <div id="bestfirst_section" className="finder_section">
                <header className="option_header">
                    <h3>Heuristic</h3>
                </header>
                <div id="bestfirst_heuristic" className="sub_options">
                    <input type="radio" name="bestfirst_heuristic" value="manhattan" checked />
                    <label className="option_label">Manhattan</label> <br/>
                    <input type="radio" name="bestfirst_heuristic" value="euclidean"/>
                    <label className="option_label">Euclidean</label> <br/>
                    <input type="radio" name="bestfirst_heuristic" value="octile"/>
                    <label className="option_label">Octile</label> <br/>
                    <input type="radio" name="bestfirst_heuristic" value="chebyshev"/>
                    <label className="option_label">Chebyshev</label> <br/>
                </div>

                <header className="option_header">
                    <h3>Options</h3>
                </header>
                <div className="optional sub_options">
                    <input type="checkbox" className="allow_diagonal" checked/>
                    <label className="option_label">Allow Diagonal</label> <br/>
                    <input type="checkbox" className="bi-directional"/>
                    <label className="option_label">Bi-directional</label> <br/>
                    <input type="checkbox" className="dont_cross_corners"/>
                    <label className="option_label">Don't Cross Corners</label> <br/>
                </div>
                </div>

                <h3 id="dijkstra_header"><a href="#">Dijkstra</a></h3>
                <div id="dijkstra_section" className="finder_section">
                <header className="option_header">
                    <h3>Options</h3>
                </header>
                <div className="optional sub_options">
                    <input type="checkbox" className="allow_diagonal" checked/>
                    <label className="option_label">Allow Diagonal</label> <br/>
                    <input type="checkbox" className="bi-directional"/>
                    <label className="option_label">Bi-directional</label> <br/>
                    <input type="checkbox" className="dont_cross_corners"/>
                    <label className="option_label">Don't Cross Corners</label> <br/>
                </div>
                </div>

            </div>
        </div>
    )
};

export default AlgoPanel;