import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';
import { Page } from './components/Page';

function App() {

  return (
      <Router>
        <Page />
      </Router>
  );
}

export default App;
