import React, { useState, useEffect } from "react"
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'

import { Backdrop } from "~components/backdrop"
import { FormikInput, FormikSubmit } from '~components/formik'
import { login, error } from '~api/account'
import { LOGIN } from '~redux/action'
import { saveToken } from '~utils/auth'
import { translate } from '~utils/translate'
import { getFromLocalStorage, saveToLocalStorage } from '~utils/localStorage'

import { loginValidation } from './validationSchema'

const initialValue = {
    identifier: '',
    password: '',
}

export const Login = ({closeLogin}) => {
    const [remember, setRemember] = useState(false)
    const dispatch = useDispatch()
    
    useEffect(() => {
        const rememberMe = getFromLocalStorage('remember')
        if(rememberMe) setRemember(true)
    }, [])

    translate()

    const handleRemember = () => setRemember(prev => !prev) 

    const handleSubmit = (value) => {
        try{
            dispatch({type: LOGIN, payload: value})
        } catch (err) {

        }
    }

    const handleClick = async() => {
        try{
            const response = await error()
            console.log('aaaa', response)
        } catch (err) {

            console.log('help', err.message, Object.keys(err), err.data)
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
                    <button onClick={handleClick}>click meh</button>
                </div>
            </Formik>
        </Backdrop>
    )
}
