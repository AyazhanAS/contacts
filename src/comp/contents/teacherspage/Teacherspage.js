import React from 'react'
import Curses_which_teach from './Courses_which_teach'
import photo from "./teacher.png"
import "./Teacherspage.css"

export default function Block_content() {
    return (
        <div>
            <div className="wrapper_block_content">
            <div className="photo_teacher">
                <img src={photo} />
            </div>
            <div className="about_teacher">
                <div className="teacher_name">
                    <h3>Александр Кучерок</h3>
                    <p>EX Product Маркетолог</p>
                </div>
                <div className="about_list">
                    <ul>
                        <li>— ex-руководитель образовательного проекта «Суперлюди» от Fedoriv </li>
                        <li>— руководил рекламными проектами ТРК «Люкс», общая сумма проектов — 2 млн грн </li>
                        <li>— участвовал в проекте «Главные часы страны» часы обратного отсчета к Евро-2012 </li>
                        <li>— руководил рекламными проектами ТРК «Люкс», общая сумма проектов — 2 млн грн </li>
                        <li>— ex-руководитель образовательного проекта «Суперлюди» от Fedoriv </li>
                    </ul>
                </div>
                <div className="pink_rect">
                    <div>
                        <span>Стаж обучения</span>
                        <p>5 лет</p>
                   </div>

                </div>
            </div>
        </div>
        <Curses_which_teach/>

        </div>
        
    )
}
