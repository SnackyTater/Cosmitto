import React, {useEffect} from "react"
import {ThemeButton, Logo} from "~components"

import "./style.scss"

export const LandingPage = () => {
    return (
        <div className="w-100 p-3">
            <nav className="d-flex center-vertical justify-content-around bg-gray">
                <div>
                    <Logo />
                </div>
                <ul className="d-flex">
                    <li className="px-4">Sản Phẩm</li>
                    <li className="px-4">Tìm Hiểu</li>
                    <li className="px-4">An Toàn</li>
                    <li className="px-4">Hỗ Trợ</li>
                    <li className="px-4">Tải về</li>
                </ul>
                <button>login</button>
            </nav>
            <div></div>
        </div>
    )
}
