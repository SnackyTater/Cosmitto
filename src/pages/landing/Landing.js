import React, {useState} from "react"
import {ThemeButton, Logo, NormalButton} from "~components"

import {ForgotPassword} from "./ForgotPassword"
import {Register} from "./Register"
import {Login} from "./Login"

import "./style.scss"
import background from '/public/assets/image/background.jpg'

export const LandingPage = () => {
    const [displayLogin, setDisplayLogin] = useState(false)
    const [displayForgotPassword, setDisplayForgotPassword] = useState(false)
    const [displayRegister, setDisplayRegister] = useState(false)

    const handleToggleLogin = () => setDisplayLogin(prev => !prev)
    const handleToggleForgot = () => setDisplayForgotPassword(prev => !prev)
    const handleToggleRegister = () => setDisplayRegister(prev => !prev)

    return (
        <React.Fragment>
            <div className="VW-100 VH-100 flex-fill">
                <nav className="d-flex center-vertical justify-content-around p-3 bg-translucent-gray">
                    <div>
                        <Logo />
                    </div>
                    <ul className="d-flex center">
                        <li className="px-4 landing__nav__item">Sản Phẩm</li>
                        <li className="px-4 landing__nav__item">Tìm Hiểu</li>
                        <li className="px-4 landing__nav__item">An Toàn</li>
                        <li className="px-4 landing__nav__item">Hỗ Trợ</li>
                        <li className="px-4 landing__nav__item">Tải về</li>
                    </ul>
                    <NormalButton onClick={handleToggleLogin}>login</NormalButton>
                </nav>
                <div className="fill d-flex justify-content-center align-items-center">
                    <div className="landing__background__container">
                        <img src={background} alt={''} className='landing__background'/>
                    </div>
                    <div>
                        <p className="txt-white">SWIPE RIGHT</p>
                        <NormalButton onClick={handleToggleRegister}>Register</NormalButton>
                    </div>
                </div>
            </div>
            {displayLogin && <Login closeLogin={handleToggleLogin} />}
            {displayForgotPassword && <ForgotPassword closeForgotPassword={handleToggleForgot} />}
            {displayRegister && <Register closeRegister={handleToggleRegister} />}
        </React.Fragment>
    )
}
