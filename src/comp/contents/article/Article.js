import React from 'react'
import SubNav from '../subnav/SubNav'
import "./article.css"
import article_img1 from './img/article_img1.svg'
import article_img2 from './img/article_img2.svg'
import article_img3 from './img/article_img3.svg'
import article_img4 from './img/article_img4.svg'
import article_img5 from './img/article_img5.svg'
import article_img6 from './img/article_img6.svg'
function Article() {
    return (
    <div className="article_app">
        <div className="article_wrapper">
            <div className="article_container">
                <div className="article_main">
                    <div className="article_content">
                        <h1 id="article_content_text">Статьи</h1>
                        <div className="article_vector"></div>
                    </div>
                    <SubNav/>
                    {/* <div className="article_table_content">
                        <ul className="article_table">
                            <li id="table_list1"><a href="#"> Все направления</a></li>
                            <li><a href="#">HR и рекрутинг</a></li>
                            <li><a href="#">Маркетинг и PR</a></li>
                            <li><a href="#">Финансы</a></li>
                            <li><a href="#">Бизнес и управление</a></li>
                            <li id="last_nav"><a href="#">Программы</a></li>
                        </ul>    
                    </div> */}
                    <div className="article_title">
                        <p id="title_text1">Статьи</p>
                        <p id="title_text2">Показано статей 6 из 32</p>
                    </div>
                    <div className="article_list">
                        <div className="article_first">
                            <div className="article_box1">
                                <img className="article_img1" src={article_img1}/>
                                <div className="article_list1_box1">
                                    <p id="list1_box_text1">6 худших способов уволить человека</p>
                                    <p id="list1_box_text2">Как потерять и сотрудника, и репутацию.</p>
                                </div>
                            </div>
                            <div className="article_box2">
                                <img className="article_img2" src={article_img2}/>
                                <div className="article_list1_box2">
                                    <p id="list1_box_text1">Кто придумал работать по 8 часов 5 дней в неделю</p>
                                    <p id="list1_box_text2">И сколько мы будем трудиться в будущем.</p>
                                </div>
                            </div>
                            <div className="article_box3">
                                <img className="article_img3" src={article_img3}/>
                                <div className="article_list1_box3">
                                    <p id="list1_box_text1">12 принципов лидерства Amazon с 1997 года</p>
                                    <p id="list1_box_text2">Зачем Безос предлагает сотрудникам уволиться.</p>
                                </div>
                            </div>
                        </div>
                        <div className="article_second">
                            <div className="article_box4">
                                <img className="article_img4" src={article_img4}/>
                                <div className="article_list2_box1">
                                    <p id="list1_box_text1">Кевин Хартман: «Вкладывать миллионы в аналитику, которой некому управлять, — так же бессмысленно, как купить спортивное авто без колес»</p>
                                    <p id="list1_box_text2">Директор по аналитике в Google — о том, как анализировать данные и почему не стоит блокировать cookie.</p>
                                </div>
                            </div>
                            <div className="article_box5">
                                <img className="article_img5" src={article_img5}/>
                                <div className="article_list2_box2">
                                    <p id="list1_box_text1">6 худших CEO мира и за что их уволили</p>
                                    <p id="list1_box_text2">Рассказываем о фатальных ошибках топ-менеджеров.</p>
                                </div>
                            </div>
                            <div className="article_box6">
                                <img className="article_img6" src={article_img6}/>
                                <div className="article_list2_box3">
                                    <p id="list1_box_text1">5 способов отбить у сотрудников желание работать</p>
                                    <p id="list1_box_text2">Убийцы мотивации, которые развалят даже сильную команду.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="article_button">
                        <a id="article_button_text" href="#">Показать больше</a>
                    </div>
                </div>   
            </div>
        </div>        
    </div>    
    )
}

export default Article
