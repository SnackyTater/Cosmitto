import React, {useEffect} from "react"
import {ThemeButton} from "~components"
import "./style.scss"

export const LandingPage = () => {
    useEffect(() => {
        console.log("aaavbbb")
        window.addEventListener(
            "visibilitychange",
            function () {
                console.log(
                    "document",
                    document.hidden,
                    document.visibilityState
                )
            },
            false
        )
    }, [])

    return (
        <div className="landing__container">
            <nav>
                <div>logo</div>
                <ul>
                    <li>Sản Phẩm</li>
                    <li>Tìm Hiểu</li>
                    <li>An Toàn</li>
                    <li>Hỗ Trợ</li>
                    <li>Tải về</li>
                </ul>
                <button>login</button>
            </nav>
            <div style={{background: "grey", height: "200vh"}}></div>
        </div>
    )
}
