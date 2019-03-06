import React, { Component } from 'react';
import '../Board';
import '../Square'
// import logo from '../logo.svg';
import './App.css';
import Board from '../Board';
import Square from '../Square';

class App extends Component {
  render() {
    return (
<div>
      <Board />
  

      <Square />
</div>
    
    );
  }
}

export default App;
