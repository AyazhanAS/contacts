import React from 'react'
import SubNav from '../subnav/SubNav'
import "./review.css"
import review_img1 from './img/review_img1.svg'
import review_img2 from './img/review_img2.svg'
import review_img3 from './img/review_img3.svg'
import review_img4 from './img/review_img4.svg'
import review_img5 from './img/review_img5.svg'
import review_img6 from './img/review_img6.svg'
function Review() {
    return (
    <div className="review_app">
        <div className="review_wrapper">
            <div className="review_container">
                <div className="review_main">
                    <div className="review_content">
                        <h1 id="review_content_text">Обзор книг</h1>
                        <div className="review_vector"></div>
                    </div>
                    <SubNav/>
                    <div className="review_title">
                        <p id="title_text1">Обзор книги</p>
                        <p id="title_text2">Показано обзоров 6 из 32</p>
                    </div>
                    <div className="review_book_list">
                        <div className="review_first">
                            <div className="review_box1">
                                <img className="review_img1" src={review_img1}/>
                                <div className="review_list_box">
                                    <p id="review_list_text1">«В компаниях, которые переживают кризис, проще внедрять инновации»</p>
                                    <p id="review_list_text2">Чему мы можем поучиться у Amazon.</p>
                                </div>
                            </div>
                            <div className="review_box2">
                                <img className="review_img2" src={review_img2}/>
                                <div className="review_list_box">
                                    <p id="review_list_text1">Все хотят $100, но мало кто решается протянуть за ними руку</p>
                                    <p id="review_list_text2">Как открыть свое дело без денег — инсайты из книги «Стартап без бюджета».</p>
                                </div>
                            </div>
                            <div className="review_box3">
                                <img className="review_img3" src={review_img3}/>
                                <div className="review_list_box">
                                    <p id="review_list_text1">Великие компании не продают дешевые вещи</p>
                                    <p id="review_list_text2">Результаты исследования 25 тысяч бизнесов.</p>
                                </div>
                            </div>
                        </div>
                        <div className="review_second">
                            <div className="review_box4">
                                <img className="review_img4" src={review_img4}/>
                                <div className="review_list_box">
                                    <p id="review_list_text1">Всегда завышайте предварительную цену. Когда в итоге люди платят меньше, то остаются довольны</p>
                                    <p id="review_list_text2">И другие инсайты из книги «Клиенты на всю жизнь».</p>
                                </div>
                            </div>
                            <div className="review_box5">
                                <img className="review_img5" src={review_img5}/>
                                <div className="review_list_box">
                                    <p id="review_list_text1">Хороший подчиненный должен зарабатывать больше плохого начальника</p>
                                    <p id="review_list_text2">И другие инсайты из книги «Сначала нарушьте все правила».</p>
                                </div>
                            </div>
                            <div className="review_box6">
                                <img className="review_img6" src={review_img6}/>
                                <div className="review_list_box">
                                    <p id="review_list_text1">Ваши сотрудники вам не друзья: 8 строгих правил менеджера</p>
                                    <p id="review_list_text2">Советы мультимиллионера из книги «Жесткий менеджмент».</p>
                                </div>
                        </div>
                    </div>
                    </div>
                    <div className="review_button">
                        <a id="review_button_text" href="#">Показать больше</a>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    )
}

export default Review
