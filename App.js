// src/App.js
import React from 'react';
import Header from './src/components/Header';
import ProjectCategories from './src/components/ProjectCategories';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ProjectCategories />
    </div>
  );
};

export default App;