import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

//
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';

//
import { path } from './path';
import { history } from '../utils/history';

export function RootRoute() {
  return (
    <BrowserRouter history={history}>
        <Routes>
          {
            path.map((item, index) => {
              return <Route 
                path={item.path} 
                element={(item.private) ? (
                  <PrivateRoute Component={item.component}/>
                ) : (
                  <PublicRoute Component={item.component}/>
                )}
                key={index}
              />
            })
          }
        </Routes>
    </BrowserRouter>
  )
}