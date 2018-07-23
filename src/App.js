import React, { Component } from 'react';
import Profile from './components/profile';
import ImageBox from './components/ImageBox';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper  blue lighten-1">
            <a href="/" className="brand-logo center">My Travel Blog</a>
          </div>
        </nav>
        <br />
        <Profile />
        <ImageBox />

        <div class="footer-copyright">
          <center>   © 2018 Copyright </center>
          <center> Handcrafted by Abhishek Konnur </center>
        </div>
      </div>
    );
  }
}

export default App;
