import React from 'react'
import "./Courses_which_teach.css"

export default function Curses_which_teach() {
    return (
        <div className="wrapper_curses_which_teach">
            <div className="container_for_curses_which_teach">
                <div className="curses_which_teach_theme">
                Курсы которые преподает
                </div>
                <div className="part__courses__block">
                    <div className="marketing__left__block">
                        <p className="marketing__and__PR">Маркетинг и PR</p>
                        <p className="marketing__and__PR__down">Создание и продвижение <br />бренда работодателя</p>
                    </div>
                    <div className="marketing__right__block">
                        <p className="start__and__end">22 февраля - 22 марта</p>
                        <p className="lector__name">Ведет: Татьяна Лукинюк</p>
                    </div>
                </div>

            </div>

        </div>
    )
}
