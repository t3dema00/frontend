import React from "react";
import Header from "./components/Header";
//import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="profile-section">
        <div className="profile-info">
          <div className="profile-picture">
            <img src="https://via.placeholder.com/120" alt="Profile" />
          </div>
          <div className="profile-email">
            <label>Email:</label>
            <input type="text" value="user@example.com" readOnly />
          </div>
          <button className="btn create-group">Create Group</button>
        </div>
        <div className="favorites">
          <h2>My Favorites</h2>
          <ul>
            <li>Favorite Movie 1</li>
            <li>Favorite Movie 2</li>
            <li>Favorite Movie 3</li>
          </ul>
          <button className="btn share-favorites">Share Favorites</button>
        </div>
      </div>
      <footer className="footer">
        <p>Footer Content Here</p>
      </footer>
      <section className="all-groups">
        <h2>All Groups</h2>
        <p>Content can be added dynamically here.</p>
      </section>
    </div>
  );
}

export default App;


/*
//2nd version

import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';

const App = () => {
    return (
        <div>
            <Header />
            <MovieList />
        </div>
    );
};

export default App;

*/


/*

//1st version

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/