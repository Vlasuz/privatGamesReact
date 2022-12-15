import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { accountInformation, accountPhoto } from "../../redux/actions";

const SettingsInner = (props) => {

    const [inputEmail, setInputEmail] = useState('')
    const [inputName, setInputName] = useState('')
    const [isActiveInputsForInformation, setIsActiveInputsForInformation] = useState(false)

    const info = useSelector(state => {
        const { accountInformationReducer } = state;
        return accountInformationReducer.info;
    })
    const dispatch = useDispatch();

    const handleChangeInformation = (e) => {
        e.preventDefault()
        setIsActiveInputsForInformation(false)
        e.target.closest('form').querySelectorAll('input').forEach(input => input.disabled = true);

        dispatch(accountInformation({
            name: inputName ? inputName : info.name,
            email: inputEmail ? inputEmail : info.email,
        }))
    }

    const handleChangeInput = (e) => {
        e.target.closest('form').querySelectorAll('input').forEach(input => input.disabled = false);
        setIsActiveInputsForInformation(true)
    }


    const photo = useSelector(state => {
        const { accountPhotoReducer } = state;
        return accountPhotoReducer.photo;
    })
    const [newPhoto, setNewPhoto] = useState('')
    const handleLoadPhoto = (e) => {
        setNewPhoto(e.target.value)
    }
    const handleChangePhoto = (e) => {
        e.preventDefault()
        dispatch(accountPhoto({photo: newPhoto}))
        setNewPhoto('')
    }



    return (
        <div className="account__main--wrapper">
            <div className="account__row">
                <div className="account__col _min">
                    <div className="account__block" data-aos="fade-in" data-aos-delay="500"
                         data-aos-anchor=".account__main">
                        <div className="account__block--body _none-padding _transparent">
                            <div className="account-settings-element">
                                <h3 className="account-settings-element__title">
                                    Фото
                                </h3>
                                <form action="#" className="account-settings-element__avatar">
                                    <label className="account-settings-element__avatar--body">
                                        <div className="account-settings-element__avatar--label">
                                            <img src={photo || photo !== newPhoto ? photo : "images/account/avatar-none.svg"} width="116"
                                                 height="116"
                                                 alt=""
                                                 className="account-settings-element__avatar--img" />
                                            <input onChange={handleLoadPhoto} required type="file" name="avatar"
                                                   className="account-settings-element__avatar--input" />
                                        </div>
                                        {/*<div type={"button"} className="account-settings-element__avatar--add btn _dark _large-2">*/}
                                        {/*    Добавить*/}
                                        {/*</div>*/}
                                        <div
                                            className={"account-settings-element__avatar--add btn _dark _large-2" + (newPhoto ? " _hidden" : "")}
                                        >
                                            Добавить
                                        </div>
                                        <div
                                            className={"account-settings-element__avatar--add btn _accent _large-2" + (newPhoto ? "" : " _hidden")}
                                            onClick={handleChangePhoto}
                                        >
                                            Сохранить
                                        </div>
                                    </label>
                                    <div className="account-settings-element__avatar--text">
                                        Ваше фото будут видеть все игроки во время игры
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="account__col _auto _full-on-mob">
                    <div className="account__block" data-aos="fade-in" data-aos-delay="700"
                         data-aos-anchor=".account__main">
                        <div className="account__block--body _none-padding _transparent">
                            <div className="account-settings-element">
                                <h3 className="account-settings-element__title">
                                    Информация
                                </h3>
                                <form action="#" onSubmit={e => handleChangeInformation(e)} className="account-settings-element__form">
                                    <div className="account-settings-element__form--list form-list">
                                        <label className="account-settings-element__label form-label">
                                            <input type="email" name="email"
                                                   placeholder="Email"
                                                   className="account-settings-element__input form-input"
                                                   required
                                                   disabled
                                                   value={info.email !== inputEmail && inputEmail ? inputEmail : info.email}
                                                   onChange={e => setInputEmail(e.target.value)}
                                            />
                                            <span className="account-settings-element__input-placeholder form-input-placeholder">
                                                Email
                                            </span>
                                        </label>
                                        <label className="account-settings-element__label form-label">
                                            <input type="text" name="name" value="Jane_006"
                                                   placeholder="Имя пользователя"
                                                   className="account-settings-element__input form-input"
                                                   required
                                                   disabled
                                                   value={info.name !== inputName && inputName ? inputName : info.name}
                                                   onChange={e => setInputName(e.target.value)}
                                            />
                                            <span className="account-settings-element__input-placeholder form-input-placeholder">
                                                Имя пользователя
                                            </span>
                                        </label>
                                    </div>
                                    <button
                                        className={"account-settings-element__submit btn _accent _large-2" + (isActiveInputsForInformation ? "" : " _hidden")}
                                    >
                                        Сохранить
                                    </button>
                                    <div
                                        className={"account-settings-element__submit btn _dark _large-2" + (isActiveInputsForInformation ? " _hidden" : "")}
                                        onClick={handleChangeInput}
                                    >
                                        Изменить
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="account__col _auto _full-on-mob">
                    <div className="account__block" data-aos="fade-in" data-aos-delay="800"
                         data-aos-anchor=".account__main">
                        <div className="account__block--body _none-padding _transparent">
                            <div className="account-settings-element">
                                <h3 className="account-settings-element__title">
                                    Пароль
                                </h3>
                                <form action="#" className="account-settings-element__form">
                                    <div className="account-settings-element__form--list form-list">
                                        <label className="account-settings-element__label form-label">
                                            <input type="password" name="password" value="123123123"
                                                   placeholder="Пароль"
                                                   className="account-settings-element__input form-input _none-placeholder"
                                                   required />
                                        </label>
                                    </div>
                                    <button
                                        className="account-settings-element__submit btn _dark _large-2"
                                        type="submit">
                                        Изменить
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="account__col _full _border-top" data-aos="fade-in" data-aos-delay="1000"
                     data-aos-anchor=".account__main">
                    <div className="account-wallets">
                        <h3 className="account-wallets__title min-title">
                            Ввод кошелька
                        </h3>
                        <div className="account-wallets__add">
                            <a href="#" className="account-wallets__add--btn btn _large-2">
                                Добавить кошелек
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0 8C0 3.58125 3.58125 0 8 0C12.4187 0 16 3.58125 16 8C16 12.4187 12.4187 16 8 16C3.58125 16 0 12.4187 0 8ZM8 11.5C8.41563 11.5 8.75 11.1656 8.75 10.75V8.75H10.75C11.1656 8.75 11.5 8.41563 11.5 8C11.5 7.58437 11.1656 7.25 10.75 7.25H8.75V5.25C8.75 4.83437 8.41563 4.5 8 4.5C7.58437 4.5 7.25 4.83437 7.25 5.25V7.25H5.25C4.83437 7.25 4.5 7.58437 4.5 8C4.5 8.41563 4.83437 8.75 5.25 8.75H7.25V10.75C7.25 11.1656 7.58437 11.5 8 11.5Z"
                                        fill="#F9F1DF"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsInner;