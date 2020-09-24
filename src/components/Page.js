import React from 'react'
import { Header } from './header/Header';
import { selectIsUser } from '../features/reduxSlices/userSlice';
import { useSelector } from 'react-redux';
import { Contacts } from './contacts/Contacts';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { NotFound } from './404Page/NotFound';
import { Profile } from './Profile';
import { Loading } from './contacts/Loading';
import { selectIsLoading } from '../features/reduxSlices/contactsSlice';

export const Page = () => {
  const isLogged = useSelector(selectIsUser);
  const isLoading = useSelector(selectIsLoading);


  return (
      <>
        <Header />
          <section className="App__body">
            <Loading isVisible={isLoading} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/myContacts" component={Home} />
              {isLogged && <Route exact path="/contacts" component={Contacts} />}
              {isLogged && <Route exact path="/profile" component={Profile} />}
              {isLogged && <Route exact path="/:contactId" component={Profile} />}
              <Route component={NotFound} />
            </Switch>
          </section>
      </>
  )
};
