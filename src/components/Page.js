import React from 'react'
import { Header } from './Header';
import { selectIsUser } from '../features/reduxSlices/userSlice';
import { useSelector } from 'react-redux';
import { Contacts } from './Contacts';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { NotFound } from './NotFound';
import { UserProfile } from './UserProfile';

export const Page = () => {
  const isLogged = useSelector(selectIsUser);

  return (
      <>
        <Header />
          <section className="App__body">
            <Switch>
              <Route exact path="/" component={Home} />
              {isLogged && <Route exact path="/contacts" component={Contacts} />}
              {isLogged && <Route exact path="/profile" component={UserProfile} />}
              {/* <Route to="*" component={NotFound} /> */}
            </Switch>
          </section>
      </>
  )
};
