import React from 'react';
import { Route, BrowserRouter, Routes, unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';

//
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
import CustomRouter from './customRouter';

//
import { path } from './path';
import { history } from '~constants/history';

export function RootRoute() {
  return (
    <CustomRouter history={history}>
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
         
    </CustomRouter>
  )
}