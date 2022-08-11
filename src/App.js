import React from 'react';
import logo from './test.png';
import './App.css';
import Gallery from './carousel.js';
import {FaInstagram} from 'react-icons/fa'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Roanoke Bakery Coming Soon...</h1>
        <h3><em>Custom Cake & Cookie Orders</em></h3>
        <div>{Gallery()}</div>
        <footer> <small>Est 2022</small>
          <div>Contact: info@roanokebakery.com</div>
          <a target="_blank" href="https://www.instagram.com/shannonknight3074/">
          <img className="sm_icon" src={require("./photos/insta.png")}/>
</a>
        </footer>
      </header>
    </div>
  );
}

export default App;