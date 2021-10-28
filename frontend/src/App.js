import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import routeNames from './utilities/routeNames';
import { loadable } from './utilities/loadable';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
      <Suspense fallback={<LoadingSpinner />}>
        <div className="App">
          <Switch>
            <Route exact path={routeNames.root} component={loadable.root} />
            <PrivateRoute path={routeNames.manageEvent} component={loadable.manageEvent} />
            <Route path={routeNames.registration} component={loadable.registration} />
            <Route path={routeNames.login} component={loadable.login} />
            <Route component={loadable.NoMatch} />
          </Switch>
        </div>
        <ToastContainer />
      </Suspense>
  );
}

export default App;
