import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useAuthListener } from './hooks';

import * as ROUTES from './constants/routes';

import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

import { Home, Browse, Signin, Signup } from './pages';

export default function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <Signin />
        </IsUserRedirect>

        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.Sign_UP}>
          <Signup />
        </IsUserRedirect>

        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>

        <IsUserRedirect exact user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
