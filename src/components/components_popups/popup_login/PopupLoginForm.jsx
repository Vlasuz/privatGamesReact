import React from 'react';
import openPopup from "../../../hooks/OpenPopup";
import PopupViaSocials from "../PopupViaSocials";

const PopupLoginForm = () => {
    return (
        <form action="#" className="login-popup__form popup-form">
            <div className="login-popup__form--list popup-form-list">
                <label className="login-popup__label popup-label">
                    <input type="email" name="email" required placeholder="Email"
                           className="login-popup__input popup-input email-valid-input"/>
                    <span
                        className="login-popup__input-placeholder popup-input-placeholder">Email</span>
                </label>
                <label className="login-popup__label popup-label">
                    <input type="password" name="password" required placeholder="Пароль"
                           className="login-popup__input popup-input"/>
                    <span
                        className="login-popup__input-placeholder popup-input-placeholder">Пароль</span>
                </label>
            </div>
            <button type="submit" className="login-popup__submit popup-submit btn _large _shadow">
                Войти
            </button>
            <a href="#registration-popup" onClick={openPopup}
               className="login-popup__link popup-link popup-close open-popup">
                Зарегестрироваться
            </a>
            <a href="#forgot-password-popup" onClick={openPopup}
               className="login-popup__link popup-link popup-close open-popup">
                Забыли пароль?
            </a>
            <div className="login-popup__via popup-via">
                <div className="popup-via__body">
                    <h3 className="popup-via__title">
                        Войти через
                    </h3>
                    <PopupViaSocials/>
                </div>
            </div>
        </form>
    );
};

export default PopupLoginForm;