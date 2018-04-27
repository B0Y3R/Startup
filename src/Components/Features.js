import React, { Component } from 'react';
import PhotoGrid from "./PhotoGrid";
import '../_Styles/Features.css';


class Features extends Component {
    render(){
        return (
         <section class="destinations">
            <h3 class="title"> ABOUT US</h3>
                <hr />
                    <p>
                        SafeBay is an innovative technology offering a secure means of storage for motorcycles. 
                        A single SafeBay unit is both large enough to fit most motorcycles while still being small enough to 
                        allow two SafeBay units to fit into a single parking space. Our patented wheel chock and track system allows 
                        a motorcyclist to ride up to the front of the unit, secure the motorcycle to the chock, and then slide the motorcycle
                        into the enclosure.
                    </p>   
        <PhotoGrid />
        </section> 
        ) 
      }
    };

export default Features;