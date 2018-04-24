import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>

          <nav>
            <li><a href="#" className="Home">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">THE TEAM</a></li>
            <li><a href="#">NEWS</a></li>
            <li><a href="#">CONTACT US</a></li>
          </nav>
            
          <h2>  
            <a href="#">
              <img src={logo} className="App-logo" alt="logo" />
            </a>
          </h2>

        </header>
       
          <div>
            <section className="hero">
              <div className="background-image"></div>
              <div className="hero-content-area">
                <img src={logo} className="App-logo" alt="logo" />
                <h3>Ride  Safe.  Store  Secure. </h3>
                <a href="#" className="btn">Contact Us Now!</a>
              </div>
            </section>
          </div>

          
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
            
            <ul className="grid">
              <li class="small"><div className="img1"></div></li>
              <li class="large" className="img2;"></li>
              <li class="small" className="img3"></li>
              <li class="large" className="img4"></li>
            </ul>
          </section>
        

        
        <section className="packages">
          <h3 className="title">Tour Packages</h3>
          <p>We offer a variety of mountaineering packages! Weather you've climbed Everest, or don't even know what a mountain is, we've got the perfect vacation for you!</p>
        <hr />

        <ul className="grid">
        <li>
          <i className="fa fa-compass fa-4x"></i>
            <h4>Guided Trips</h4>
              <p>Looking for the complete expierence? Take a tour with one of our experts. They'll show you secrets that you're likely to miss otherwise.</p>
        </li>

        <li>
          <i className="fa fa-camera-retro fa-4x"></i>
            <h4>Photo Trips</h4>
            <p>Want to expierence nature's beauty without all of that annoying exercise? Take a photo tour on one of our mountain buses.</p>
        </li>

        <li>
          <i className="fa fa-bicycle fa-4x"></i>
            <h4>Biking Trips</h4>
              <p>If bicycles are more your speed, consider taking a tour through one of our mountain bike paths. We'll provide the bikes, and lunch too!</p>
        </li>

        <li>
          <i className="fa fa-flag-checkered fa-4x"></i>
            <h4>Racing Trips</h4>
              <p>Got a competitve spirit? Sign up for one of our mountain marathons! Try to reach the summit before anyone else.</p>
        </li>

        </ul>

 </section>
        

      </div>
    );
  }
}

export default App;


