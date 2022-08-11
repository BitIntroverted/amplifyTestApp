import React from 'react';
import logo from './test.png';
import './App.css';
import Gallery from './carousel.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Roanoke Bakery Coming Soon...</h1>
        <h3>Custom Cake Orders</h3>
        <h6>Contact: roanokebakeryva@gmail.com</h6>
        <div>{Gallery()}</div>
        <footer>Est 2022</footer>
      </header>
    </div>
  );
}

export default App;