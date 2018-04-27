import React, { Component } from 'react';
import '../_Styles/IconFacts.css';

class IconFacts extends Component {
    render() {
        return(
            <section className="packages">
                
            <h3 className="title">SAFEBAY KEY POINTS</h3>
            <p>We offer a variety of mountaineering packages! Weather you've climbed Everest, or don't even know what a mountain is, we've got the perfect vacation for you!</p>

            <hr />

            <ul className="grid">
            <li>
                <i className="fa fa-motorcycle fa-4x"></i>
                <h4>Guided Trips</h4>
                <p>Looking for the complete expierence? Take a tour with one of our experts. They'll show you secrets that you're likely to miss otherwise.</p>
            </li>

            <li>
                <i className="fa fa-lock fa-4x"></i>
                <h4>Photo Trips</h4>
                <p>Want to expierence nature's beauty without all of that annoying exercise? Take a photo tour on one of our mountain buses.</p>
            </li>

            <li>
                <i className="fa fa-gear fa-4x"></i>
                <h4>Biking Trips</h4>
                <p>If bicycles are more your speed, consider taking a tour through one of our mountain bike paths. We'll provide the bikes, and lunch too!</p>
            </li>

            <li>
                <i className="fa fa-shield fa-4x"></i>
                <h4>Racing Trips</h4>
                <p>Got a competitve spirit? Sign up for one of our mountain marathons! Try to reach the summit before anyone else.</p>
            </li>

        </ul>

 </section>
        )
    }
}

export default IconFacts;