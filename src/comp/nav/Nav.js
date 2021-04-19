import React, { useState, useEffect } from "react";
import "./Nav.css";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./img/Logo.png";
import { CSSTransition } from "react-transition-group";
// import TransitionGroup  from "react-transition-group";

function Nav() {
  const [openModal, setOpenModal] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    setOpenModal(false);
  }, [location]);
  return (
    <>
      <div className="nav__wrapper">
        <div className="nav__close">
          <div
            className={`container ${openModal ? "nav__container" : ""} ${
              isLogged ? "nav__loggedContainer" : ""
            }`}
          >
            <div
              className={`${!openModal ? "navbar__initial" : "navbar"} ${
                isLogged ? "navbar__logged" : ""
              }`}
            >
              <div className={`logo__wrapper`}>
                <img src={Logo} alt="logo" style={{ height: "21px" }} />
              </div>

              <div className="search__wrapper">
                <CSSTransition
                  in={openModal}
                  mountOnEnter
                  unmountOnExit
                  timeout={{
                    enter: 300,
                    exit: 0,
                  }}
                  classNames="showNavbar"
                >
                  <div
                    className={`search__container ${
                      !openModal && "display-none"
                    }`}
                  >
                    <input
                      type="text"
                      className="search__input"
                      placeholder="Введите запрос"
                    />
                  </div>
                </CSSTransition>
              </div>

              <div className="userInfo__wrapper">
                <CSSTransition
                  in={openModal}
                  mountOnEnter
                  unmountOnExit
                  timeout={{
                    enter: 300,
                    exit: 400,
                  }}
                  classNames="showNavbar"
                >
                  <div
                    className={`userInfo__container ${
                      !isLogged ? "login__h5" : "logout__h5"
                    } ${!openModal && "display-none"}`}
                  >
                    {isLogged ? (
                      <div className="nav__user">
                        <img
                          className="nav__ava"
                          src="https://avatars.dicebear.com/4.5/api/male/epic.svg"
                          alt="userAvatar"
                        />

                        <div className="username__wrapper">
                          <h4>Мамадьяров Нурдаулет</h4>
                          <h5
                            onClick={() => {
                              setIsLogged(!isLogged);
                            }}
                          >
                            Выйти из аккаунта
                          </h5>
                        </div>
                      </div>
                    ) : (
                      <h5
                        className="login__text"
                        onClick={() => {
                          setIsLogged(!isLogged);
                        }}
                      >
                        Войти в аккаунт
                      </h5>
                    )}
                  </div>
                </CSSTransition>
              </div>

              <div className="buger__wrapper">
                <div className={`${!openModal ? "burger__initial" : "burger"}`}>
                  <div
                    className="menu-toggle"
                    onClick={() => {
                      setOpenModal(!openModal);
                    }}
                  >
                    <button
                      id="data-menu-toggle"
                      className={`data-menu-toggle ${
                        openModal ? "active" : ""
                      }`}
                    >
                      <span className="menu-bar bar"></span>
                    </button>
                    {!openModal && (
                      <div>
                        <p className="menu__tag">Menu</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CSSTransition
        in={openModal}
        mountOnEnter
        unmountOnExit
        timeout={{
          enter: 300,
          exit: 800,
        }}
        classNames="showNavbarLink"
      >
        <div className="nav__wrapperLink">
          <div className="nav__open">
            <div className={`nav__contentLink ${isLogged && "pt-120px"}`}>
              <div className="container">
                <div className="nav__links">
                  <ul className="links">
                    <li>
                      <NavLink to="/" activeClassName="selected" exact>
                        Главная
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/courses" activeClassName="selected">
                        Наши курсы
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/articles" activeClassName="selected">
                        Статьи
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/video" activeClassName="selected">
                        Видео
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/bookreview" activeClassName="selected">
                        Обзоры книг
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/teachers" activeClassName="selected">
                        Преподаватели
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contacts" activeClassName="selected">
                        Контакты
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}

export default Nav;
