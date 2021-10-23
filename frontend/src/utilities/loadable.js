import React from 'react';

export const loadable = {
  root: React.lazy(() => import('../pages/Main')),
  manageEvent: React.lazy(() => import('../pages/ManageEvent')),
  NoMatch: React.lazy(() => import('../pages/404')),
};
