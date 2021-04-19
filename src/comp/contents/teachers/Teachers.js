import React from 'react'
import "./Teachers.css"

import teachers1 from './img/teachers1.png'
import teachers2 from './img/teachers2.png'
import teachers3 from './img/teachers3.png'
import teachers4 from './img/teachers4.png'

function Teachers() {
	return (
		<div>
			<section class="teachers">
				<div class="teachers_content _container">
					<div class="our_teachers">
						<h3>Наши преподаватели</h3>
						<p>Преподавателей 6 из 16</p>
					</div>

					<div class="our_teachers_content">
						<a href="#" class="our_teachers_image">
							<img src={teachers1} alt="" />
							<div class="image_content">
								<div class="image_title">
									<div class="image_bg"></div>
									<div class="image_text">
										<h2>Александр Кучерок</h2>
										<h3>EX Product Маркетолог</h3>
										<p>Руководил рекламными проектами ТРК «Люкс», общая сумма проектов — 2 млн грн</p>
										<h4>Стаж обучения 5 лет</h4>
									</div>
								</div>
							</div>

						</a>
						<a href="#" class="our_teachers_image">
							<img src={teachers2} alt="" />
							<div class="image_content">
								<div class="image_title">
									<div class="image_bg bg_middle"></div>
									<div class="image_text">
										<h2>Александр Кучерок</h2>
										<h3>EX Product Маркетолог</h3>
										<p>Руководил рекламными проектами ТРК «Люкс», общая сумма проектов — 2 млн грн</p>
										<h4>Стаж обучения 5 лет</h4>
									</div>
								</div>
							</div>
						</a>
						<a href="#" class="our_teachers_image">
							<img src={teachers3} alt="" />
							<div class="image_content">
								<div class="image_title">
									<div class="image_bg bg_middle"></div>
									<div class="image_text">
										<h2>Александр Кучерок</h2>
										<h3>EX Product Маркетолог</h3>
										<p>Руководил рекламными проектами ТРК «Люкс», общая сумма проектов — 2 млн грн</p>
										<h4>Стаж обучения 5 лет</h4>
									</div>
								</div>
							</div>
						</a>
						<a href="#" class="our_teachers_image">
							<img src={teachers4} alt="" />
							<div class="image_content">
								<div class="image_title">
									<div class="image_bg bg_right"></div>
									<div class="image_text">
										<h2>Александр Кучерок</h2>
										<h3>EX Product Маркетолог</h3>
										<p>Руководил рекламными проектами ТРК «Люкс», общая сумма проектов — 2 млн грн</p>
										<h4>Стаж обучения 5 лет</h4>
									</div>
								</div>
							</div>
						</a>
					</div>
					<div class="teachers_button">
						<button class="teachers_content_button">
							Показать больше
				</button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Teachers
