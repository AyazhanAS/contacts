import React from 'react'
import "./Search.css"
import firstArt from "./img/FirstArt.png";
import secondArt from "./img/SecondArt.png";
import thridArt from "./img/ThridArt.png";
import fourthArt from "./img/FourthArt.png";
import fifthArt from "./img/FifthArt.png";
import sixthArt from "./img/SixthArt.png";

import FirstVideo from "./videos/FirstVideo.png";
import SecondVideo from "./videos/SecondVideo.png";
import ThridVideo from "./videos/ThridVideo.png";
import FourthVideo from "./videos/FourthVideo.png";
import FifthVideo from "./videos/FifthVideo.png";
import SixthVideo from "./videos/SixthVideo.png";


import FirstPhoto from "./photos/FirstPhoto.png";
import SecondPhoto from "./photos/SecondPhoto.png";
import ThridPhoto from "./photos/ThridPhoto.png";
import FourthPhoto from "./photos/FourthPhoto.png";

export default function Search() {
    return (
        <div className="searchpage__wrapper">
            <div className="searchpage__container">
                <div className="result__searchpage">
                    <div className="result__searchpage__theme">
                        Результаты поиска по запросу "Example"
                    </div>
                    <div className="finded__results">
                        <div className="finded__results_container">
                            <span>Курсов:</span><span className="how_many">19</span>
                        </div>
                        <div>
                            <span>Статей:</span><span className="how_many">19</span>
                        </div>
                        <div>
                            <span>Видео:</span> <span className="how_many">19</span>
                        </div>
                        <div>
                            <span>Обзоры книг:</span><span className="how_many">19</span>
                        </div>
                        <div>
                            <span>Преподаватели:</span><span className="how_many">19</span>
                        </div>

                    </div>

                </div>



                <div className="searchpage__input__wrapper">
                    <div className="searchpage__container">
                        <input type="text"
                            className="searchpage__input"
                            placeholder="Введите запрос"
                        />
                    </div>

                </div>


                <div className="part__courses">
                    <div className="part__theme">
                        Курсы
                    </div>

                    <div className="part__courses__common__block">
                        <div className="part__courses__every__block">
                            <div className="marketing__left__block">
                                <p className="marketing__and__PR"> Маркетинг и PR</p>
                                <p className="marketing__and__PR__down">Директор по маркетингу</p>
                            </div>
                            <div className="marketing__right__block">
                                <p className="start__and__end">22 февраля - 22 марта</p>
                                <p className="lector_name"> Ведет: Татьяна Лукинюк</p>
                            </div>
                        </div>

                        <div className="part__courses__every__block">
                            <div className="marketing__left__block">
                                <p className="marketing__and__PR">Маркетинг и PR</p>
                                <p className="marketing__and__PR__down">Создание и продвижение <br />бренда работодателя</p>
                            </div>
                            <div className="marketing__right__block">
                                <p className="start__and__end">22 февраля - 22 марта</p>
                                <p className="lector_name">Ведет: Татьяна Лукинюк</p>
                            </div>
                        </div>

                        <div className="part__courses__every__block">
                            <div className="marketing__left__block">
                                <p className="programms__courses">Программы</p>
                                <p className="marketing__and__PR__down">Построение бизнес процессов</p>
                            </div>
                            <div className="marketing__right__block">
                                <p className="start__and__end">22 февраля - 22 марта</p>
                                <p className="lector_name">Ведет: Татьяна Лукинюк</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="part__articles">
                    <div className="part__theme">
                        Статьи
                    </div>
                    <div className="part__articles__content">
                        <div className="part__articles__column__one">
                            <div className="part__articles__article">
                                <img src={firstArt} alt="" />
                                <div className="part__articles__text">
                                    <p className="part__articles__up__text">6 худших способов уволить человека</p>
                                    <p className="part__articles__down__text">Как потерять и сотрудника, и репутацию.</p>
                                </div>

                            </div>

                            <div className="part__articles__article">
                                <img src={thridArt} alt="" />
                                <div className="part__articles__text">
                                    <p className="part__articles__up__text">Кто придумал работать по 8 часов 5 дней в неделю</p>
                                    <p className="part__articles__down__text">И сколько мы будем трудиться в будущем.</p>
                                </div>

                            </div>

                            <div className="part__articles__article">
                                <img src={fifthArt} alt="" />
                                <div className="part__articles__text">
                                    <p className="part__articles__up__text">6 худших CEO мира и за что их уволили</p>
                                    <p className="part__articles__down__text">Рассказываем о фатальных ошибках топ-менеджеров.</p>
                                </div>

                            </div>
                        </div>

                        <div className="part__articles__column__two">


                            <div className="part__articles__article">
                                <div className="part__articles__img">
                                    <img src={secondArt} alt="" />
                                </div>

                                <div className="part__articles__text">
                                    <p className="part__articles__up__text">12 принципов лидерства Amazon с 1997 года</p>
                                    <p className="part__articles__down__text">Зачем Безос предлагает сотрудникам уволиться.</p>
                                </div>
                            </div>

                            <div className="part__articles__article">
                                <img src={fourthArt} alt="" />
                                <div className="part__articles__text">
                                    <p className="part__articles__up__text">Кевин Хартман: «Вкладывать миллионы в аналитику, которой некому управлять, — так же бессмысленно, как купить спортивное авто без колес»</p>
                                    <p className="part__articles__down__text">Директор по аналитике в Google — о том, как анализировать данные и почему не стоит блокировать cookie.</p>
                                </div>

                            </div>

                            <div className="part__articles__article">
                                <img src={sixthArt} alt="" />
                                <div className="part__articles__text">
                                    <p className="part__articles__up__text">5 способов отбить у сотрудников желание работать</p>
                                    <p className="part__articles__down__text">Убийцы мотивации, которые развалят даже сильную команду.</p>
                                </div>

                            </div>
                        </div>





                    </div>
                    <div className="part__button">
                        <a>Показать больше</a> 
                    </div>
                </div>

               
                <div className="part__videos">
                    <div className="part__theme">
                        Видео
                    </div>
                    <div className="part__videos__content">
                        <div>
                            <img alt="" src={FirstVideo}/>
                        </div>
                        <div>
                            <img alt="" src={SecondVideo}/>
                        </div>
                        <div>
                            <img alt="" src={ThridVideo}/>
                        </div>
                        <div>
                            <img alt="" src={FourthVideo}/>
                        </div>
                        <div>
                            <img alt="" src={FifthVideo}/>
                        </div>
                        <div>
                            <img alt="" src={SixthVideo}/>
                        </div>
                    </div>
                    <div className="part__button">
                        <a>Показать больше</a> 
                    </div>

                </div>

                <div className="part__teachers">
                    <div className="part__theme">
                        Преподаватели
                    </div>
                    <div className="part__teachers__photos">
                        <div>
                            <img alt="" src={FirstPhoto}/>
                        </div>
                        <div>
                            <img alt="" src={SecondPhoto}/>
                        </div>
                        <div>
                            <img alt="" src={ThridPhoto}/>
                        </div>
                        <div>
                            <img alt="" src={FourthPhoto}/>
                        </div>

                    </div>

                    <div className="part__button">
                        <a>Показать больше</a> 
                    </div>
                </div>
            </div>

        </div>
    )
}
