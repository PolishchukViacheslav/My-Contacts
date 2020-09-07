import React, { useEffect } from 'react';

import { Contacts } from './components/Contacts';
import './App.css';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import { selectIsUser } from './features/reduxSlices/contactsSlice';

function App() {
  const isLogged = useSelector(selectIsUser);
  console.log('is', isLogged);

  return (
    <section className="App">
      <Header />
      {isLogged && <Contacts />}
    </section>
  );
}

export default App;
