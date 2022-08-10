import React, {useState} from "react"
import {ThemeButton, Logo, NormalButton} from "~components"

import {ForgotPassword} from "./ForgotPassword"
import {Register} from "./Register"
import {Login} from "./Login"

import "./style.scss"

export const LandingPage = () => {
    const [displayLogin, setDisplayLogin] = useState(false)
    const [displayForgotPassword, setDisplayForgotPassword] = useState(false)
    const [displayRegister, setDisplayRegister] = useState(false)

    const handleToggleLogin = () => setDisplayLogin(prev => !prev)
    const handleToggleForgot = () => setDisplayForgotPassword(prev => !prev)
    const handleToggleRegister = () => setDisplayRegister(prev => !prev)

    return (
        <>
            <div className="w-100">
                <nav className="d-flex center-vertical justify-content-around p-3 bg-gray">
                    <div>
                        <Logo />
                    </div>
                    <ul className="d-flex center">
                        <li className="px-4">Sản Phẩm</li>
                        <li className="px-4">Tìm Hiểu</li>
                        <li className="px-4">An Toàn</li>
                        <li className="px-4">Hỗ Trợ</li>
                        <li className="px-4">Tải về</li>
                    </ul>
                    <NormalButton onClick={handleToggleLogin}>login</NormalButton>
                </nav>
                <div></div>
            </div>
            {displayLogin && <Login closeLogin={handleToggleLogin} />}
            {displayForgotPassword && <ForgotPassword closeForgotPassword={handleToggleForgot} />}
            {displayRegister && <Register closeRegister={handleToggleRegister} />}
        </>
    )
}
