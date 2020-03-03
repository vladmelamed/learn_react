import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar navbar-inverse navbar-fixed-top">
        <div className="navbar-inner">
          <div className="container">
            <a href="/app" className="brand">React Source Application</a>
            <a className="create btn btn-primary pull-right">Create</a>
          </div>
          <div id="filterView" className="container form-inline">
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
