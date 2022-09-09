import React, { useState, useEffect } from "react"
import { Formik } from 'formik'

import { Backdrop } from "~components/backdrop"
import { FormikInput, FormikSubmit } from '~components/formik'
import { login } from '~api/account'
import { saveToken } from '~utils/auth'
import { getFromLocalStorage, saveToLocalStorage } from '~utils/localStorage'

import { loginValidation } from './validationSchema'

const initialValue = {
    identifier: '',
    password: '',
}

export const Login = ({closeLogin}) => {
    const [remember, setRemember] = useState(false)
    
    useEffect(() => {
        const rememberMe = getFromLocalStorage('remember')
        if(rememberMe) setRemember(true)
    }, [])

    const handleRemember = () => setRemember(prev => !prev) 

    const handleSubmit = (value) => {
        try{
            
        } catch (err) {

        }
    }

    return (
        <Backdrop onClickBackdrop={closeLogin}>
            
            <Formik
                initialValues={initialValue}
                onSubmit={handleSubmit}
                validationSchema={loginValidation}
            >
                <div className="d-flex justify-content-center row">
                    <div className="py-2 col-8">
                        <FormikInput name='identifier' placeholder={'username'}/>
                    </div>
                    <div className="py-2 col-8">
                        <FormikInput name='password' placeholder={'password'}/>
                    </div>
                    <div className="py-2 col-8">
                        <div className="d-flex justify-content-between">
                            
                        </div>
                    </div>
                    <div className="py-2 col-6">
                        <FormikSubmit>Login</FormikSubmit>
                    </div>
                    
                </div>
            </Formik>
        </Backdrop>
    )
}
