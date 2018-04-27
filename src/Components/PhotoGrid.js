import React, { Component } from "react";
import "../_Styles/PhotoGrid.css";

class PhotoGrid extends Component {
    render() {
        return(
                <ul className="grid" >
                            <li className="small"><img src="https://images.unsplash.com/photo-1511286906603-e8a982144b4a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b1ece58cb65ab5fe74760f3f08390a7c&auto=format&fit=crop&w=300&q=80"/></li>
                            <li className="large"><img src="https://images.unsplash.com/photo-1511286906603-e8a982144b4a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b1ece58cb65ab5fe74760f3f08390a7c&auto=format&fit=crop&w=300&q=80"/></li>
                            <li className="small"><img src="https://images.unsplash.com/photo-1511286906603-e8a982144b4a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b1ece58cb65ab5fe74760f3f08390a7c&auto=format&fit=crop&w=300&q=80"/></li>
                            <li className="large"><img src="https://images.unsplash.com/photo-1511286906603-e8a982144b4a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b1ece58cb65ab5fe74760f3f08390a7c&auto=format&fit=crop&w=300&q=80"/></li>
                        </ul>
        )
    }
};

export default PhotoGrid;