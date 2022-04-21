import React from 'react'
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { checkAuthorization } from '../utils/auth'; 

export default function PrivateRoute({path, Component, ...rest}) {
    const isAuth = checkAuthorization();

    const CustomRoute = (props) => {
        if(isAuth){
            return <Component {...props} {...rest}/>
        } else {
            return <Navigate to="/" replace={true}/>
        }
    }

    return <CustomRoute />
}

PrivateRoute.propTypes = {
    path: PropTypes.string,
    component: PropTypes.elementType
}

PrivateRoute.defaultProps = {
    path: '/'
}