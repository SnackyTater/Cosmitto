import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { history } from '~constants/history';
import CustomRouter from './customRouter';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
import { path } from './path';

export function RootRoute() {
  return (
    <CustomRouter history={history}>
      <Routes>
         {
            path.map((item, index) => {
              return <Route 
                path={item.path} 
                element={item.private ? <PrivateRoute Component={item.component}/> : <PublicRoute Component={item.component}/>}
                key={index}
              >
                {
                  item.children?.map((child, index) => <Route path={child.path} element={<child.component/>} key={index}/>)
                }
              </Route>
            })
          }
      </Routes>
    </CustomRouter>
  )
}