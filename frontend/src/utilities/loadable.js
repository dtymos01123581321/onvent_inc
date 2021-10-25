import React from 'react';

export const loadable = {
  root: React.lazy(() => import('../pages/Main')),
  manageEvent: React.lazy(() => import('../pages/ManageEvent')),
  registration: React.lazy(() => import('../pages/Register')),
  login: React.lazy(() => import('../pages/Login')),
  NoMatch: React.lazy(() => import('../pages/404')),
};
