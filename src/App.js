import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
// import {BrowserRouter as Router, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
