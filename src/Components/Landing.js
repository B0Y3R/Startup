import React, { Component } from 'react';
import '../_Styles/Landing.css';
import logo from '../logo.svg';

class Landing extends Component {
    render(){
        return (
        <div>
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
        </div>
        )
    }
};

export default Landing;