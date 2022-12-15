import React from 'react';
import openPopup from "../../../hooks/OpenPopup";
import PopupViaSocials from "../PopupViaSocials";

const PopupRegistrationForm = () => {
    return (
        <form action="#" className="registration-popup__form popup-form">
            <div className="registration-popup__form--list popup-form-list">
                <label className="registration-popup__label popup-label">
                    <input type="email" name="email" required placeholder="Email"
                           className="registration-popup__input popup-input email-valid-input"/>
                    <span
                        className="registration-popup__input-placeholder popup-input-placeholder">Email</span>
                </label>
                <label className="registration-popup__label popup-label">
                    <input type="text" name="name" required placeholder="Имя пользователя"
                           className="registration-popup__input popup-input"/>
                    <span
                        className="registration-popup__input-placeholder popup-input-placeholder">Имя пользователя</span>
                </label>
                <label className="registration-popup__label popup-label">
                    <input type="password" name="password" required placeholder="Пароль"
                           className="registration-popup__input popup-input"/>
                    <span
                        className="registration-popup__input-placeholder popup-input-placeholder">Пароль</span>
                </label>
                <label className="registration-popup__label popup-label">
                    <input type="password" name="password-repeat" required
                           placeholder="Повторите пароль"
                           className="registration-popup__input popup-input"/>
                    <span
                        className="registration-popup__input-placeholder popup-input-placeholder">Повторите пароль</span>
                </label>
            </div>
            <div className="registration-popup__checkbox popup-checkbox">
                <label className="popup-checkbox__label">
                    <input type="checkbox" name="service-usage-rules" required
                           className="popup-checkbox__input"/>
                    <span className="popup-checkbox__element">
                    </span>
                    <span className="popup-checkbox__text">
                        Я соглашаюсь со всеми <a href="index.html">правилами использования сервиса</a>
                    </span>
                </label>
            </div>
            <button type="submit"
                    className="registration-popup__submit popup-submit btn _large _shadow">
                Зарегистрироваться
            </button>
            <a href="#login-popup" onClick={openPopup}
               className="registration-popup__link popup-link popup-close open-popup">
                У меня уже есть аккаунт
            </a>
            <div className="registration-popup__via popup-via">
                <div className="popup-via__body">
                    <h3 className="popup-via__title">
                        Зарегестрироваться через
                    </h3>
                    <PopupViaSocials/>
                </div>
            </div>
        </form>
    );
};

export default PopupRegistrationForm;