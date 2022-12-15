import React from 'react';

const PopupPromocodeForm = () => {
    return (
        <form action="#" className="promocode-popup__form popup-form">
            <div className="promocode-popup__form--list popup-form-list">
                <label className="promocode-popup__label popup-label">
                    <input type="text" name="promocode" required placeholder="Промокод"
                           className="promocode-popup__input popup-input"/>
                    <span
                        className="promocode-popup__input-placeholder popup-input-placeholder">Промокод</span>
                </label>
            </div>
            <button type="submit"
                    className="promocode-popup__submit popup-submit btn _large _shadow">
                Применить
            </button>
        </form>
    );
};

export default PopupPromocodeForm;