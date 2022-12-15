import React from 'react';
import {useSelector} from "react-redux";

const BlockInfoAboutUser = () => {

    const informationOfUser = useSelector(state => {
        const { accountInformationReducer } = state
        return accountInformationReducer.info
    })

    return (
        <div className="account__block--body _none-padding">
            <div className="account-base-info">
                <div className="account-base-info__item">
                    <h3 className="account-base-info__name">
                        {informationOfUser.name || "Unknown"}
                    </h3>
                    <span className="account-base-info__span">
                                        {informationOfUser.email || "Unknown"}
                                    </span>
                </div>
                <div className="account-base-info__item">
                    <dl className="account-base-info__list">
                        <dt>
                            <img src="images/icons/chip.svg" width="24" height="24" alt="" />
                            Фишки
                        </dt>
                        <dd>250</dd>
                        <dt>
                            <img src="images/icons/dollar-circle.svg" width="24"
                                 height="24"
                                 alt=""/> Morgawr
                        </dt>
                        <dd>400</dd>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default BlockInfoAboutUser;