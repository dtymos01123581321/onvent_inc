import React from 'react';

export const loadable = {
  root: React.lazy(() => import('../pages/Main')),
  manageEvent: React.lazy(() => import('../pages/ManageEvent')),
  registration: React.lazy(() => import('../pages/Register')),
  NoMatch: React.lazy(() => import('../pages/404')),
};
