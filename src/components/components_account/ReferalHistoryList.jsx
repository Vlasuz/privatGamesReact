import React from 'react';

const ReferalHistoryList = () => {

    const referalHistory = [
        {
            id: 0,
            date: "26.07.2022",
            title: "Kingdomino234",
            text: "https://reflink-board-games-id-45-56-mr-jane123123123",
            cash: "+20",
        },
        {
            id: 1,
            date: "22.07.2022",
            title: "Kiino234",
            text: "https://reflink-board-games-reflink-board-games-id-45-56-mr-jane123123123",
            cash: "+50",
        },
        {
            id: 3,
            date: "22.02.2022",
            title: "no234",
            text: "https://-board-games-id-45-56-mr-jane123123123",
            cash: "+10",
        },
    ]

    return (
        <ul className="account-referal-history__list">

            {
                referalHistory.map(item =>
                    <li className="account-referal-history__item">
                        <div className="account-referal-history__item--body">
                            <div className="account-referal-history__item--header">
                                <span className="account-referal-history__item--username">
                                    Kingdomino234
                                </span>
                                <time className="account-referal-history__item--time"
                                      dateTime="2022-06-26">
                                    26.07.2022
                                </time>
                                <span className="account-referal-history__item--link">
                                    https://reflink-board-games-id-45-56-mr-ja123123123
                                </span>
                            </div>
                            <div className="account-referal-history__item--price">
                                +20
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.9453 15.8329C17.4759 14.2773 18.3337 12.1824 18.3337 10.0001C18.3337 7.81776 17.4759 5.72288 15.9453 4.16728C15.9309 4.14473 15.9118 4.1256 15.8892 4.11119C15.8748 4.08865 15.8557 4.06951 15.8331 4.05511C14.2775 2.52454 12.1826 1.66675 10.0003 1.66675C7.818 1.66675 5.72312 2.52454 4.16752 4.05511C4.14498 4.06951 4.12584 4.08865 4.11144 4.11119C4.08889 4.1256 4.06976 4.14473 4.05535 4.16728C2.52478 5.72288 1.66699 7.81776 1.66699 10.0001C1.66699 12.1824 2.52478 14.2773 4.05535 15.8329L4.11144 15.889C4.12584 15.9115 4.14498 15.9307 4.16752 15.9451C5.72312 17.4756 7.818 18.3334 10.0003 18.3334C12.1826 18.3334 14.2775 17.4756 15.8331 15.9451C15.8557 15.9307 15.8748 15.9115 15.8892 15.889C15.9118 15.8746 15.9309 15.8554 15.9453 15.8329ZM2.98173 10.641H4.91265C5.02801 11.553 5.38791 12.4168 5.95422 13.1408L4.58415 14.5109C3.66815 13.4144 3.10905 12.0641 2.98173 10.641ZM4.58415 5.48927L5.95422 6.85934C5.38791 7.5834 5.02801 8.44716 4.91265 9.35911H2.98173C3.10905 7.93602 3.66815 6.58579 4.58415 5.48927ZM17.0189 9.35911H15.088C14.9726 8.44716 14.6127 7.5834 14.0464 6.85934L15.4165 5.48927C16.3325 6.58579 16.8916 7.93602 17.0189 9.35911ZM13.1411 5.95397C12.417 5.38767 11.5532 5.02777 10.6413 4.9124V2.98149C12.0644 3.10881 13.4146 3.6679 14.5111 4.58391L13.1411 5.95397ZM9.35936 4.9124C8.44741 5.02777 7.58365 5.38767 6.85959 5.95397L5.48952 4.58391C6.58604 3.6679 7.93626 3.10881 9.35936 2.98149V4.9124ZM6.85959 14.0462C7.58365 14.6125 8.44741 14.9724 9.35936 15.0878V17.0187C7.93626 16.8914 6.58604 16.3323 5.48952 15.4163L6.85959 14.0462ZM10.6413 15.0878C11.5532 14.9724 12.417 14.6125 13.1411 14.0462L14.5111 15.4163C13.4146 16.3323 12.0644 16.8914 10.6413 17.0187V15.0878ZM14.0464 13.1408C14.6127 12.4168 14.9726 11.553 15.088 10.641H17.0189C16.8916 12.0641 16.3325 13.4144 15.4165 14.5109L14.0464 13.1408Z" fill="#D93C44"/></svg>
                            </div>
                        </div>
                    </li>
                )
            }

        </ul>
    );
};

export default ReferalHistoryList;