import React from "react";
import "./Login.css";

function Login() {
  return (
    <div>
      <section class="entrance">
        <div class="entrance_content">
          <div class="entrance_content_bg _container">
            <div class="entrance_title">
              <div class="entrance_text">
                <h3>Вход в аккаунт</h3>
                <form class="entrance_form">
                  <div class="entrance_input">
                    <div class="entrance_input_text">
                      <input
                        class="entrance_input_text_input _top"
                        placeholder="Электронная почта"
                        type="email"
                      />
                    </div>
                    <div class="entrance_input_text">
                      <input
                        class="entrance_input_text_input _bottom"
                        placeholder="Пароль"
                        type="password"
                      />
                    </div>
                  </div>
                  <a href="#">Забыли пароль?</a>
                  <div class="entrance_button">
                    <button class="entrane_content_button">
                      зарегистрироваться
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="entrance_line"></div>
            <div class="entrance_social">
              <div class="entrance_link_title">
                <a class="entrance_content_link" href="#">
                  <img
                    class="entrance_link_image"
                    src="img/google.png"
                    alt=""
                  />
                  <span class="entrance_link_text">
                    Войти при помощи Google
                  </span>
                </a>
              </div>
              <div class="entrance_link_title">
                <a class="entrance_content_link" href="#">
                  <img
                    class="entrance_link_image"
                    src="img/Vkontakte.png"
                    alt=""
                  />
                  <span class="entrance_link_text">
                    Войти при помощи Google
                  </span>
                </a>
              </div>
              <div class="entrance_link_title">
                <a class="entrance_content_link" href="#">
                  <img
                    class="entrance_link_image"
                    src="img/facebook.png"
                    alt=""
                  />
                  <span class="entrance_link_text">
                    Войти при помощи Google
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
