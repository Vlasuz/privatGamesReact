import React from 'react';

const MainFeedbackFrom = () => {
    return (
        <form action="#" className="feedback__form" data-aos="fade-in" data-aos-delay="500">
            <h2 className="feedback__title section-title _vertical">
                Обратная связь
            </h2>
            <label className="feedback__label">
                <span className="feedback__input-name">Email*</span>
                <input type="email" name="email" className="feedback__input" placeholder="Email@gmail"
                       required/>
            </label>
            <label className="feedback__label">
                <input type="text" name="name" className="feedback__input" placeholder="Имя пользователя"/>
            </label>
            <label className="feedback__label">
                <textarea name="message" placeholder="Ваше сообщение" rows="3" className="feedback__textarea">
                </textarea>
            </label>
            <button className="feedback__submit btn _large _red" type="submit">Отправить</button>
        </form>
    );
};

export default MainFeedbackFrom;