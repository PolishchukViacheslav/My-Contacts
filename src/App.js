import React from 'react';

import { Contacts } from './components/Contacts';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <section className="App">
      <Header />
      <Contacts />
    </section>
  );
}

export default App;
