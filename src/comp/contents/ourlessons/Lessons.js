import React from 'react'
import "./Lesson.css"
import Group24 from './img/Group24.svg'
import marketing from './img/marketing.svg'
import finance from './img/finance.svg'
import sale from './img/sale.svg'
import business from './img/business.svg'
import SubNav from '../subnav/SubNav'
function Lessons() {
    return (
        <div className="lessonApp">
 <div className="lessonWrapper">
 <div className="lessoncontainer">

        <div className="main">
            <div className="content1">
                <h1 id="table1">
                    НАШИ КУРСЫ</h1>
                <div className="vector1">
                </div>
            </div>
            {/* <div className="category">
                <ul className="catetable">
                    <li id="t1"><a href="#">Все направления</a></li>
                    <li id="t2"><a href="#">HR и рекрутинг</a></li>
                    <li id="t3"><a href="#">Маркетинг и PR</a></li>
                    <li id="t4"><a href="#">Финансы</a></li>
                    <li id="t5"><a href="#">Бизнес и управление</a></li>
                    <li id="t6"><a href="#">Программы</a></li>
                    <li><a href="#"><img src={Group24}/></a></li>
                </ul>
            </div> */}
            <SubNav/>
            <div className="content2">
                <h3>Популярные курсы</h3>
                <p>Показано курсов 10 из 67</p>
            </div>
            <div className="hot_course">
                <div className="mark">
                    <img src={marketing}/>
                    <div className="markpage">
                        <h3>Маркетинг и PR</h3>
                        <p id="p1">Директор по маркетингу</p>
                        <p id="p2">Ведет: Татьяна Лукинюк</p>
                        <p id="p3">22 февраля - 22 марта</p>
                    </div>
                </div>
                <div className="finance">
                    <img src={finance}/>
                    <div className="finapage">
                        <h3>Финансы</h3>
                        <p id="p1">Управления финансами</p>
                        <p id="p2">Ведет: Татьяна Лукинюк</p>
                        <p id="p3">22 февраля - 22 марта</p>
                    </div>
                </div>
                <div className="sale">
                    <img src={sale}/>
                    <div className="sapage">
                        <h3>Продажи</h3>
                        <p id="p1">Мененджер по продажам</p>
                        <p id="p2">Ведет: Татьяна Лукинюк</p>
                        <p id="p3">22 февраля - 22 марта</p>
                    </div>
                </div>
                <div className="business">
                    <img src={business}/>
                    <div className="busipage">
                        <h3>Бизнес <br/>управление</h3>
                        <p id="p1">Построение бизнес процессов</p>
                        <p id="p2">Ведет: Татьяна Лукинюк</p>
                        <p id="p3">22 февраля - 22 марта</p>
                    </div>
                </div>
            </div>
            <h3 id="courtext">Все курсы</h3>
            <div className="allcourse">
                <div className="business_course">
                    <div className="busi_box1">
                        <p id="busi_text1">Бизнес и управление</p>
                        <p id="busi_text2">Создание и продвижение <br/>бренда работодателя</p>
                    </div>
                    <div className="busi_box2">
                        <p id="busi_text3">22 февраля - 22 марта</p>
                        <p id="busi_text4">Ведет: Татьяна Лукинюк</p>
                    </div>
                </div>
                <div className="marketing_course">
                    <div className="mark_box1">
                        <p id="mark_text1">Маркетинг и PR</p>
                        <p id="mark_text2">Директор по маркетингу</p>
                    </div>
                    <div className="mark_box2">
                        <p id="mark_text3">22 февраля - 22 марта</p>
                        <p id="mark_text4">Ведет: Татьяна Лукинюк</p>
                    </div>
                </div>
                <div className="finance_course">
                    <div className="fina_box1">
                        <p id="fina_text1">Финансы</p>
                        <p id="fina_text2">Главный бугхалтер</p>
                    </div>
                    <div className="fina_box2">
                        <p id="fina_text3">22 февраля - 22 марта</p>
                        <p id="fina_text4">Ведет: Татьяна Лукинюк</p>
                    </div>
                </div>
                <div className="programs_course">
                    <div className="prog_box1">
                        <p id="prog_text1">Программы</p>
                        <p id="prog_text2">Построение бизнес процессов</p>
                    </div>
                    <div className="prog_box2">
                        <p id="prog_text3">22 февраля - 22 марта</p>
                        <p id="prog_text4">Ведет: Татьяна Лукинюк</p>
                    </div>
                </div>
                <div className="recruiting_course">
                    <div className="recr_box1">
                        <p id="recr_text1">HR и рекрутинг</p>
                        <p id="recr_text2">Организационный дизайн</p>
                    </div>
                    <div className="recr_box2">
                        <p id="recr_text3">1 мая - 31 Августа</p>
                        <p id="recr_text4">Ведет: Татьяна Лукинюк</p>
                    </div>
                </div>
                <div className="marketing_course">
                    <div className="mark_box1">
                        <p id="mark_text1">Маркетинг и PR</p>
                        <p id="mark_text2">Директор по маркетингу</p>
                    </div>
                    <div className="mark_box2">
                        <p id="mark_text3">22 февраля - 22 марта</p>
                        <p id="mark_text4">Ведет: Татьяна Лукинюк</p>
                    </div>
                </div>
    
            </div>
            <div className="botton_more">
                <a id="more_b" href="#">Показать больше</a>
            </div>
        </div>    
    
    
    
    </div>
    
        </div>
       
        </div>
       )
}

export default Lessons
