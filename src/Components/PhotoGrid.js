import React, { Component } from "react";
import "../_Styles/PhotoGrid.css";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";

console.log(img1);
console.log(img2);

var img = {
    backgroundImage: 'url(' + img1 + ')',
};

var imgtwo = {
    backgroundImage: 'url(' + img2 + ')'
};

var imgthree = {
    backgroundImage: 'url(' + img3 + ')'
}

var imgFour = {
    backgroundImage: 'url(' + img4 + ')'
}

class PhotoGrid extends Component {
    render() {
        return(
                <ul className="grid" >
                            <li className="small" style={img}></li>
                            <li className="large" style={imgtwo}></li>
                            <li className="large" style={imgthree}></li>
                            <li className="small" style={imgFour}></li>
                </ul>
        )
    }
};

export default PhotoGrid;