import React from 'react'
import { HomePage } from 'page/home'
import { LandingPage } from 'page/landing'

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