import React from 'react'
import SubNav from '../subnav/SubNav'
import './videomaterial.css'
import material_img1 from './img/material_img1.svg'
import play_button from './img/play_button.svg'
import material_img2 from './img/material_img2.svg'
import material_img3 from './img/material_img3.svg'
import material_img4 from './img/material_img4.svg'
import material_img5 from './img/material_img5.svg'
import material_img6 from './img/material_img6.svg'
import material_img7 from './img/material_img7.svg'
import material_img9 from './img/material_img9.svg'
import material_img10 from './img/material_img10.svg'
import material_img11 from './img/material_img11.svg'
import material_img12 from './img/material_img12.svg'
import material_img13 from './img/material_img13.svg'
function Videomaterial() {
    return (
        <div className="material_app">
            <div className="material_wrapper">
                <div className="material_container">
                    <div className="material_main">
                        <div className="material_content">
                            <h1 id="material_content_text">Видео</h1>
                            <div className="material_vector"></div>
                        </div>
                        <SubNav/>
                        <div className="hot_video_title">
                            <p id="title_text1">Популярные видео</p>
                            <p id="title_text2">Показано видео 11 из 32</p>
                        </div>
                        <div className="hot_video_list">
                            <div className="material_first">
                                <div className="material_box">
                                    <img className="material_img1" src={material_img1}/>
                                    <div className="material_box_middel">
                                        <img src={play_button}/>
                                    </div>
                                    <div className="material_box_footer">
                                        <p id="text1">Гран-при за одно слово</p>
                                        <p id="text2">Лучшая реклама Каннских львов 2000</p>
                                    </div>
                                </div>
                                <div className="material_box">
                                    <img className="material_img1" src={material_img2}/>
                                    <div className="material_box_middel">
                                        <img src={play_button}/>
                                    </div>
                                    <div className="material_box_footer">
                                        <p id="text1">Гран-при за одно слово</p>
                                        <p id="text2">Лучшая реклама Каннских львов 2000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="material_second">
                                <div className="material_box">
                                    <img className="material_img1" src={material_img3}/>
                                    <div className="material_box_middel">
                                        <img src={play_button}/>
                                    </div>
                                    <div className="material_box_footer">
                                        <p id="text1">Гран-при за одно слово</p>
                                        <p id="text2">Лучшая реклама Каннских львов 2000</p>
                                    </div>
                                </div>
                                <div className="material_box">
                                    <img className="material_img1" src={material_img4}/>
                                    <div className="material_box_middel">
                                        <img src={play_button}/>
                                    </div>
                                    <div className="material_box_footer">
                                        <p id="text1">Гран-при за одно слово</p>
                                        <p id="text2">Лучшая реклама Каннских львов 2000</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="all_video_title">
                            <p id="title_text1">Все видео</p>
                        </div>
                        <div className="all_video_list">
                            <div className="all_first">
                                <div className="material_box">
                                    <img className="material_img1" src={material_img5}/>
                                    <div className="material_box_middel">
                                        <img src={play_button}/>
                                    </div>
                                    <div className="all_box_footer">
                                        <p id="all_video_text1">Гран-при за одно слово</p>
                                        <p id="all_video_text2">Лучшая реклама Каннских львов 2000</p>
                                    </div>
                                </div>
                                <div className="material_box">
                                    <img className="material_img1" src={material_img6}/>
                                    <div className="material_box_middel">
                                        <img src={play_button}/>
                                    </div>
                                    <div className="all_box_footer">
                                        <p id="all_video_text1">Гран-при за одно слово</p>
                                        <p id="all_video_text2">Лучшая реклама Каннских львов 2000</p>
                                    </div>
                                </div>
                                <div className="material_box">
                                    <img className="material_img1" src={material_img7}/>
                                    <div className="material_box_middel">
                                        <img src={play_button}/>
                                    </div>
                                    <div className="all_box_footer">
                                        <p id="all_video_text1">Гран-при за одно слово</p>
                                        <p id="all_video_text2">Лучшая реклама Каннских львов 2000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="all_second">
                                <div className="material_box">
                                    <img className="material_img1" src={material_img9}/>
                                    <div className="material_box_middel">
                                        <img src={play_button}/>
                                    </div>
                                    <div className="all_box_footer">
                                        <p id="all_video_text1">Гран-при за одно слово</p>
                                        <p id="all_video_text2">Лучшая реклама Каннских львов 2000</p>
                                    </div>
                                </div>
                                <div className="material_box">
                                    <img className="material_img1" src={material_img9}/>
                                    <div className="material_box_middel">
                                        <img src={play_button}/>
                                    </div>
                                    <div className="all_box_footer">
                                        <p id="all_video_text1">Гран-при за одно слово</p>
                                        <p id="all_video_text2">Лучшая реклама Каннских львов 2000</p>
                                    </div>
                                </div>
                                <div className="material_box">
                                    <img className="material_img1" src={material_img10}/>
                                    <div className="material_box_middel">
                                        <img src={play_button}/>
                                    </div>
                                    <div className="all_box_footer">
                                        <p id="all_video_text1">Гран-при за одно слово</p>
                                        <p id="all_video_text2">Лучшая реклама Каннских львов 2000</p>
                                    </div>
                                </div>
                            </div>
                            <div className="all_third">
                                <div className="material_box">
                                    <img className="material_img1" src={material_img11}/>
                                    <div className="material_box_middel">
                                        <img src={play_button}/>
                                    </div>
                                    <div className="all_box_footer">
                                        <p id="all_video_text1">Гран-при за одно слово</p>
                                        <p id="all_video_text2">Лучшая реклама Каннских львов 2000</p>
                                    </div>
                                </div>
                                <div className="material_box">
                                    <img className="material_img1" src={material_img12}/>
                                    <div className="material_box_middel">
                                        <img src={play_button}/>
                                    </div>
                                    <div className="all_box_footer">
                                        <p id="all_video_text1">Гран-при за одно слово</p>
                                        <p id="all_video_text2">Лучшая реклама Каннских львов 2000</p>
                                    </div>
                                </div>
                                <div className="material_box">
                                    <img className="material_img1" src={material_img13}/>
                                    <div className="material_box_middel">
                                        <img src={play_button}/>
                                    </div>
                                    <div className="all_box_footer">
                                        <p id="all_video_text1">Гран-при за одно слово</p>
                                        <p id="all_video_text2">Лучшая реклама Каннских львов 2000</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="material_button">
                            <a id="material_button_text" href="#">Показать больше</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videomaterial
