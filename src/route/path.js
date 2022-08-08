import React from 'react'
import { HomePage } from '~pages/home'
import { LandingPage } from '~pages/landing'

export const path = [
    {
        path: '/',
        component: LandingPage,
        private: false
    },
    {
        path: 'home',
        component: HomePage,
        private: true,
    }
]