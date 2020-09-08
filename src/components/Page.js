import React from 'react'
import { Header } from './Header';
import { selectIsUser } from '../features/reduxSlices/userSlice';
import { useSelector } from 'react-redux';
import { Contacts } from './Contacts';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { NotFound } from './NotFound';

export const Page = () => {
  const isLogged = useSelector(selectIsUser);

  return (
    <section className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        {isLogged && <Route exact path="/contacts" component={Contacts} />}
        <Route component={NotFound} />
      </Switch>
    </section>
  )
};
