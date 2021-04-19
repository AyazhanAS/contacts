import React from "react";
import "./ForgetPass.css";

function ForgetPass() {
  return (
    <div>
      <section class="password_recovery">
        <div class="password_recovery_content _container">
          <div class="password_recovery_block">
            <div class="password_recovery_text">
              <h3>Восстановление пароля</h3>
              <form>
                <div class="entrance_input_text password_recovery_title">
                  <input
                    class="entrance_input_text_input _top"
                    placeholder="Электронная почта"
                    type="email"
                  />
                </div>
                <button class="entrane_content_button password_recovery_button">
                  зарегистрироваться
                </button>
              </form>
              <div class="password_recovery_link">
                <a class="password_recovery_link" href="#">
                  Войти в аккаунт?
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ForgetPass;
