import React, {useState} from 'react';
import ActiveNotification from "../../hooks/ActiveNotification";

const AccountChangePassword = () => {

    const [isActiveChange, setIsActiveChange] = useState(false)

    const [password, setPassword] = useState('Gamer007')
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [repeatNewPassword, setRepeatNewPassword] = useState('')

    const handleChangePassword = (e) => {
        e.preventDefault()

        if(password === oldPassword && newPassword === repeatNewPassword){
            setPassword(newPassword)

            ActiveNotification('#notification_change-password')
            setIsActiveChange(prev => !prev)

            setOldPassword('')
            setNewPassword('')
            setRepeatNewPassword('')
        } else {
            ActiveNotification('#notification_change-password-error')
        }

    }
    return (
        <div className="account__col _auto _full-on-mob">
            <div className="account__block" data-aos="fade-in" data-aos-delay="800"
                 data-aos-anchor=".account__main">
                <div className="account__block--body _none-padding _transparent">
                    <div className="account-settings-element">
                        <h3 className="account-settings-element__title">
                            Пароль
                        </h3>
                        {
                            isActiveChange ?
                                <form onSubmit={handleChangePassword} action="#"
                                      className="account-settings-element__form account-settings-element__form_password">
                                    <div className={"account-settings-element__form--list form-list" + (password === oldPassword ? "" : " _error")}>
                                        <label className="account-settings-element__label form-label">
                                            <input type="password" name="password"
                                                   placeholder="Введите старый пароль"
                                                   className="account-settings-element__input form-input _none-placeholder"
                                                   required
                                                   onChange={e => setOldPassword(e.target.value)}
                                                   value={oldPassword}
                                            />
                                        </label>
                                    </div>
                                    <div className={"account-settings-element__form--list form-list" + (newPassword === repeatNewPassword ? "" : " _error")}>
                                        <label className="account-settings-element__label form-label">
                                            <input type="password" name="password"
                                                   placeholder="Введите новый пароль"
                                                   className="account-settings-element__input form-input _none-placeholder"
                                                   required
                                                   onChange={e => setNewPassword(e.target.value)}
                                                   value={newPassword}
                                            />
                                        </label>
                                    </div>
                                    <div className={"account-settings-element__form--list form-list" + (newPassword === repeatNewPassword ? "" : " _error")}>
                                        <label className="account-settings-element__label form-label">
                                            <input type="password" name="password"
                                                   placeholder="Введите новый пароль еще раз"
                                                   className="account-settings-element__input form-input _none-placeholder"
                                                   required
                                                   onChange={e => setRepeatNewPassword(e.target.value)}
                                                   value={repeatNewPassword}
                                            />
                                        </label>
                                    </div>
                                    <button
                                        className="account-settings-element__submit btn _dark _large-2"
                                        type="submit">
                                        Изменить
                                    </button>
                                </form>
                                :
                                <>
                                    <div className="account-settings-element__form--list form-list">
                                        <label className="account-settings-element__label form-label">
                                            <input type="password" name="password" value={password} disabled
                                                   placeholder="Пароль"
                                                   className="account-settings-element__input form-input _none-placeholder"
                                                   required/>
                                        </label>
                                    </div>
                                    <button
                                        className="account-settings-element__submit btn _dark _large-2"
                                        type="submit"
                                        onClick={() => setIsActiveChange(prev => !prev)}
                                    >
                                        Изменить
                                    </button>
                                </>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountChangePassword;