import React from 'react'
import "./Footer.css"

function Footer() {
	return (
		<div>
			<footer id="footer" class="footer">
				<div class="footer_content _container">
					<div class="footer_content_title">
						<div class="footer_content_logo">
							<p>logo</p>
						</div>
						<div class="footer_content_navigation">
							<p>Навигация</p>
							<nav class="navigation nav">
								<ul class="navigation_contnet">
									<li><a class="navigation_text" href="#">Главная</a></li>
									<li><a class="navigation_text" href="#">Наши курсы</a></li>
									<li><a class="navigation_text" href="#">Статьи</a></li>
									<li><a class="navigation_text" href="#">Видео</a></li>
									<li><a class="navigation_text" href="#">Обзор книг</a></li>
									<li><a class="navigation_text" href="#">Преподаватели</a></li>
									<li><a class="navigation_text" href="#">Контакты</a></li>
								</ul>
							</nav>
						</div>
						<div class="footer_content_navigation">
							<p>Контакты</p>
							<nav class="contants nav">
								<ul class="navigation_contnet">
									<li><img class="point1" src="img/Vector3.png" alt="" /><a class="navigation_text" href="#">Адрес: г.
											Алматы Клочкова 55</a></li>
									<li><img class="point2" src="img/Vector4.png" alt="" /><a class="navigation_text" href="#">+7
											705 842 42 42</a></li>
									<li><img class="point3" src="img/Vector5.png" alt="" /><a class="navigation_text"
											href="#">Example@gmail.com</a></li>
								</ul>
							</nav>
						</div>
						<div class="footer_content_navigation">
							<p>Юридическая информация</p>
							<nav class="information nav">
								<ul class="navigation_contnet">
									<li><a class="navigation_text" href="#">Политика конфидециальности</a></li>
									<li><a class="navigation_text" href="#">Договор оферты</a></li>
								</ul>
							</nav>
						</div>
						<div class="footer_content_navigation">
							<p>Следите за нами</p>
							<nav class="socialnetworks nav">
								<ul class="navigation_content">
									<li class="social_image"><a class="navigation_text" href="#"><img src="img/Group3.png" alt="" /></a>
									</li>
									<li class="social_image"><a class="navigation_text" href="#"><img class="youtube"
												src="img/Youtubelogo.png" alt="" /></a></li>
									<li class="social_image"><a class="navigation_text" href="#"><img src="img/Facebooklogo.png"
												alt="" /></a></li>
									<li class="social_image"><a class="navigation_text" href="#"><img class="instagram"
												src="img/Instagramlogo.png" alt="" /></a></li>
									<li class="social_image"><a class="navigation_text" href="#"><img class="cloud"
												src="img/Group4.png" alt="" /></a></li>
									<li class="social_image"><a class="navigation_text" href="#"><img class="telegram"
												src="img/Telegramlogo.png" alt="" /></a></li>
								</ul>
							</nav>
						</div>
					</div>
					<div class="footer_content_line">
						<div class="footer_line"></div>
						<p>Copyright © 2021 All Rights Reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer
