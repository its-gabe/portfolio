---
layout: page
title: "joao gabriel's portfolio"
permalink: /public/index.html
---

## Código do App.js

```javascript
import React from 'react';
import Header from '/src/components/Header';
import ProjectCategories from '/src/components/ProjectCategories';
import '/src/App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ProjectCategories />
    </div>
  );
};

export default App;
