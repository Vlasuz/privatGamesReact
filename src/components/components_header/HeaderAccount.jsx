import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import ActiveDropdown from "../../hooks/ActiveDropdown";
import {useDispatch, useSelector} from "react-redux";
import {actionLogout} from "../../redux/actions";

const HeaderAccount = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    ActiveDropdown(setIsOpen, ".header__account")

    const informationOfUser = useSelector(state => {
        const { accountInformationReducer } = state
        return accountInformationReducer.info
    })

    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch( actionLogout( {auth: false} ) )
    }

    const photo = useSelector(state => {
        const { accountPhotoReducer } = state;
        return accountPhotoReducer.photo;
    })

    return (
        <div
            className={"header__nav--account header__account header__drop-down" + (isOpen ? " _active" : "")}>
            <button
                type="button"
                className="header__account--target header__drop-down--target"
                onClick={() => setIsOpen(prev => !prev)}
            >

                <picture>
                    <img src={photo ? photo : "images/account/avatar-none.svg"} alt="" width="27" height="27" alt="Ваш аватар" loading="lazy"
                         className="header__account--avatar"/>
                </picture>
                <span className="header__account--name">
                    {informationOfUser.name || "Unknown"}
                </span>
                <svg width="7" height="5" viewBox="0 0 7 5" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.49991 4.75C3.35065 4.75 3.20132 4.69507 3.08757 4.5852L0.170898 1.7727C-0.0569661 1.55298 -0.0569661 1.19702 0.170898 0.977295C0.398763 0.757568 0.767904 0.757568 0.995768 0.977295L3.49991 3.39297L6.0046 0.977734C6.23246 0.758008 6.6016 0.758008 6.82947 0.977734C7.05733 1.19746 7.05733 1.55342 6.82947 1.77314L3.9128 4.58564C3.79887 4.69551 3.64939 4.75 3.49991 4.75Z"
                        fill="#F9F1DF"/>
                </svg>
            </button>
            <div className="header__drop-down--block">
                <div className="header__drop-down--body">
                    <ul className="header__drop-down--list">
                        <li className="header__drop-down--item">
                            <Link to={"/account-main"} className="header__drop-down--link">
                                Профиль
                            </Link>
                        </li>
                        <li className="header__drop-down--item">
                            <NavLink to={"/account-settings"} className="header__drop-down--link">
                                Настройки
                            </NavLink>
                        </li>
                        <li className="header__drop-down--item _line">
                            <button
                                className="header__drop-down--link"
                                onClick={handleLogout}
                            >
                                Выйти
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HeaderAccount;