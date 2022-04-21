import React from 'react'
import HomePage from '../react/pages/home'
import UnprotectedPage from '../react/pages/unprotected'
import ProtectedPage from '../react/pages/protected'
import { LoginPage } from '../react/pages/login'

export const path = [
    {
        path: '/',
        component: 'home',
        private: true
    },
    {
        path: 'login',
        component: 'login',
        private: false,
    },
    {
        path: 'private',
        component: 'private',
        private: true,
    },
    {
        path: 'unprotected',
        component: 'unprotected',
        private: false
    }
]

export const component = {
    login: LoginPage,
    private: ProtectedPage,
    unprotected: UnprotectedPage,
    home: HomePage
}