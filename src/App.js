import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import { Page } from './components/Page';

function App() {
  // const isLogged = useSelector(selectIsUser);
  // console.log('is', isLogged);

  return (
      <Router>
        <Page />
      </Router>
  );
}

export default App;
