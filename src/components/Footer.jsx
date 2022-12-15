import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Footer = () => {

    const gamesList = [
        {
            catalog_name: "Популярное",
            catalog_id: "0",
            icon: "images/icons/hot.svg",
            list_of_catalog: [
                {
                    id: '0',
                    title_of_game: "Шахматы японские - 1",
                    image: "images/main-page/games/image-1.png",
                }
            ]
        },
        {
            catalog_name: "Шахматы",
            catalog_id: "1",
            icon: "images/icons/chess.svg",
            list_of_catalog: [
                {
                    id: '1',
                    title_of_game: "Шахматы японские - 2",
                    image: "images/main-page/games/image-1.png",
                },
                {
                    id: '2',
                    title_of_game: "Шахматы японские - 3",
                    image: "images/main-page/games/image-1.png",
                },
                {
                    id: '3',
                    title_of_game: "Шахматы японские - 4",
                    image: "images/main-page/games/image-1.png",
                },
            ]
        },
        {
            catalog_name: "Фишки",
            catalog_id: "2",
            icon: "images/icons/chips.svg",
            list_of_catalog: [
                {
                    id: '4',
                    title_of_game: "Шахматы японские - 5",
                    image: "images/main-page/games/image-1.png",
                },
                {
                    id: '5',
                    title_of_game: "Шахматы японские - 6",
                    image: "images/main-page/games/image-1.png",
                },
            ]
        },
        {
            catalog_name: "Домино",
            catalog_id: "3",
            icon: "images/icons/domino.svg",
            list_of_catalog: [
                {
                    id: '6',
                    title_of_game: "Шахматы японские - 7",
                    image: "images/main-page/games/image-1.png",
                },
                {
                    id: '7',
                    title_of_game: "Шахматы японские - 8",
                    image: "images/main-page/games/image-1.png",
                },
            ]
        },
        {
            catalog_name: "Карточные",
            catalog_id: "4",
            icon: "images/icons/cards.svg",
            list_of_catalog: [
                {
                    id: '8',
                    title_of_game: "Шахматы японские - 9",
                    image: "images/main-page/games/image-1.png",
                },
                {
                    id: '9',
                    title_of_game: "Шахматы японские - 10",
                    image: "images/main-page/games/image-1.png",
                },
            ]
        }
    ];

    return (
        <footer className="footer" data-aos="fade-in" data-aos-anchor=".main">
            <div className="footer__bg">
                <picture>
                    <source srcSet="images/footer/bg.webp" type="image/webp"/>
                    <img src="images/footer/bg.png" loading="lazy" alt="" width="0" height="0"
                         className="footer__bg--img"/>
                </picture>
            </div>
            <div className="footer__container container _large">
                <div className="footer__intro">
                    <a href="index.html" className="footer__logo">
                        <img src="images/logo.svg" width="100" height="39" loading="lazy" alt="" className="footer__logo--img"/>
                    </a>
                    <div className="footer__contacts">
                        <a href="tel:+38098111111" className="footer__contacts--link" aria-label="+38098111111">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.599373 10.6435L4.03698 9.36192C4.44189 9.20955 4.91682 9.3123 5.19183 9.60931L6.58873 11.092C8.78279 10.1553 10.565 8.60405 11.6422 6.69795L9.93731 5.4847C9.59672 5.24279 9.48076 4.83207 9.65299 4.47999L11.1266 1.49094C11.3196 1.10774 11.7951 0.898094 12.2605 0.992036L15.4542 1.63255C15.9056 1.72208 16.2215 2.06782 16.2215 2.47168C16.2215 9.42225 9.72016 15.0753 1.72653 15.0753C1.26174 15.0753 0.865384 14.8007 0.76178 14.408L0.0251496 11.6311C-0.0815272 11.2275 0.158915 10.8088 0.599373 10.6435Z" fill="#F9F1DF"/>
                            </svg>
                            <span>
                                +38098111111
                            </span>
                        </a>
                        <a href="mailto:boardgames@gmail.com" className="footer__contacts--link"
                           aria-label="boardgames@gmail.com">
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.751 0.214844C16.6506 0.214844 17.3804 0.849156 17.3804 1.63164C17.3804 2.07734 17.1394 2.49648 16.7286 2.76508L9.34197 7.58219C8.95498 7.83308 8.42542 7.83308 8.03844 7.58219L0.651765 2.76508C0.241459 2.49648 0 2.07734 0 1.63164C0 0.849156 0.729502 0.214844 1.62941 0.214844H15.751ZM7.38667 8.33781C8.16065 8.84255 9.21976 8.84255 9.99374 8.33781L17.3804 3.5207V9.66016C17.3804 10.7021 16.4062 11.5492 15.2079 11.5492H2.17255C0.972556 11.5492 0 10.7021 0 9.66016V3.5207L7.38667 8.33781Z"
                                    fill="#F9F1DF"/>
                            </svg>
                            <span>
                                boardgames@gmail.com
                            </span>
                        </a>
                    </div>
                    <div className="footer__social">
                        <ul className="footer__social--list">
                            <li className="footer__social--item">
                                <a href="#" className="footer__social--link" title="Instagram">
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.5028 20.6722C7.73521 20.6722 7.40895 20.6576 6.32891 20.6103C5.48667 20.5826 4.65533 20.4114 3.87069 20.1041C2.51312 19.5758 1.43964 18.5019 0.911836 17.1441C0.616295 16.3566 0.456889 15.5246 0.440444 14.6836C0.377441 13.6058 0.377441 13.2526 0.377441 10.5063C0.377441 7.73087 0.392067 7.40686 0.440444 6.33245C0.457249 5.49263 0.616649 4.66177 0.911836 3.87536C1.43906 2.51578 2.51429 1.44096 3.87407 0.914251C4.66007 0.617468 5.49114 0.457647 6.33116 0.441734C7.40557 0.380981 7.75883 0.380981 10.5028 0.380981C13.2929 0.380981 13.6135 0.395607 14.6767 0.441734C15.5189 0.457784 16.3522 0.617588 17.1405 0.914251C18.4999 1.44156 19.575 2.51617 20.1028 3.87536C20.4033 4.67323 20.5635 5.51708 20.5764 6.36957C20.6394 7.44736 20.6394 7.7995 20.6394 10.5446C20.6394 13.2897 20.6237 13.6497 20.5764 14.7151C20.5597 15.5569 20.3999 16.3897 20.1039 17.1778C19.5748 18.5366 18.4997 19.6108 17.1405 20.1389C16.3533 20.4339 15.5217 20.5933 14.6812 20.6103C13.6068 20.6722 13.2547 20.6722 10.5028 20.6722ZM10.4646 2.16192C7.71271 2.16192 7.42695 2.17542 6.35253 2.2238C5.71124 2.23229 5.07615 2.35064 4.47484 2.57369C3.5869 2.91346 2.88429 3.61321 2.54089 4.49976C2.31613 5.10761 2.19777 5.74965 2.19101 6.3977C2.13138 7.48786 2.13138 7.77362 2.13138 10.5063C2.13138 13.2064 2.14151 13.5338 2.19101 14.6172C2.20108 15.2587 2.31937 15.8939 2.54089 16.4961C2.88479 17.382 3.58729 18.0812 4.47484 18.421C5.07574 18.6455 5.71109 18.7639 6.35253 18.7709C7.44157 18.8339 7.72846 18.8339 10.4646 18.8339C13.2243 18.8339 13.51 18.8204 14.5755 18.7709C15.2172 18.7631 15.8528 18.6447 16.4543 18.421C17.3368 18.0783 18.0349 17.3807 18.3781 16.4983C18.6024 15.8899 18.7208 15.2476 18.728 14.5992H18.7404C18.7887 13.5237 18.7887 13.2368 18.7887 10.4883C18.7887 7.73987 18.7764 7.45074 18.728 6.37632C18.7179 5.73556 18.5996 5.1011 18.3781 4.49976C18.0357 3.61612 17.3375 2.91715 16.4543 2.57369C15.8529 2.34951 15.2172 2.23113 14.5755 2.2238C13.4875 2.16192 13.2029 2.16192 10.4646 2.16192ZM10.5028 15.7029C8.39897 15.7043 6.50151 14.4381 5.69535 12.4948C4.8892 10.5515 5.33314 8.31401 6.82013 6.82573C8.30713 5.33745 10.5443 4.89157 12.4882 5.69605C14.4322 6.50052 15.7 8.39688 15.7005 10.5007C15.6974 13.3708 13.3729 15.6973 10.5028 15.7029ZM10.5028 7.12335C8.63878 7.12335 7.12769 8.63444 7.12769 10.4985C7.12769 12.3625 8.63878 13.8736 10.5028 13.8736C12.3668 13.8736 13.8779 12.3625 13.8779 10.4985C13.8736 8.63624 12.365 7.12768 10.5028 7.12335ZM15.903 6.3212C15.2341 6.31871 14.6935 5.77509 14.6947 5.10616C14.696 4.43724 15.2386 3.89562 15.9075 3.89562C16.5764 3.89562 17.1191 4.43723 17.1203 5.10615C17.1206 5.42888 16.9924 5.73845 16.764 5.96645C16.5355 6.19444 16.2257 6.32209 15.903 6.3212Z"
                                            fill="#F9F1DF"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="footer__social--item">
                                <a href="#" className="footer__social--link" title="Twitter">
                                    <svg width="27" height="20" viewBox="0 0 27 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M23.0005 3.18434C24.1178 2.56467 24.9538 1.58894 25.3524 0.439323C24.3025 1.01724 23.1539 1.42433 21.956 1.64301C20.2954 0.0132644 17.6642 -0.383342 15.5328 0.674807C13.4013 1.73296 12.2973 3.9839 12.8376 6.16986C8.53714 5.96956 4.53051 4.08499 1.81471 0.985088C0.397392 3.25304 1.12167 6.15226 3.46989 7.61059C2.62075 7.58526 1.79044 7.37197 1.0482 6.98851C1.0482 7.00932 1.0482 7.03013 1.0482 7.05095C1.04869 9.41341 2.84343 11.4484 5.33945 11.9166C4.55182 12.1154 3.72566 12.1446 2.92398 12.0021C3.62594 14.0225 5.63303 15.4066 7.92068 15.4479C6.02599 16.8275 3.68611 17.5756 1.27753 17.572C0.850611 17.5725 0.424028 17.5498 0 17.5037C2.44586 18.9618 5.29255 19.7358 8.19987 19.7331C12.2446 19.7588 16.1318 18.2795 18.9918 15.626C21.8519 12.9724 23.4462 9.36611 23.418 5.61369C23.418 5.39862 23.4126 5.18471 23.4018 4.97195C24.4493 4.26963 25.3534 3.39958 26.0716 2.40269C25.0957 2.80399 24.0605 3.06746 23.0005 3.18434Z"
                                            fill="#F9F1DF"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="footer__social--item">
                                <a href="#" className="footer__social--link" title="Telegram">
                                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M23.1053 11.2519C23.1053 17.4653 18.0683 22.5023 11.8549 22.5023C5.64147 22.5023 0.604492 17.4653 0.604492 11.2519C0.604492 5.03844 5.64147 0.00146484 11.8549 0.00146484C18.0683 0.00146484 23.1053 5.03844 23.1053 11.2519ZM12.2581 8.30692C11.1638 8.76206 8.9768 9.70409 5.69708 11.133C5.1645 11.3448 4.88552 11.552 4.86012 11.7546C4.8172 12.097 5.24596 12.2318 5.82982 12.4154C5.90923 12.4403 5.99152 12.4662 6.07588 12.4936C6.65031 12.6804 7.42302 12.8988 7.82471 12.9075C8.18909 12.9154 8.59578 12.7651 9.04478 12.4568C12.1091 10.3883 13.691 9.34278 13.7903 9.32024C13.8603 9.30434 13.9574 9.28434 14.0232 9.34281C14.089 9.40128 14.0825 9.51201 14.0755 9.54172C14.0331 9.72279 12.35 11.2875 11.4791 12.0972C11.2075 12.3497 11.0149 12.5287 10.9756 12.5696C10.8874 12.6612 10.7975 12.7479 10.7111 12.8311C10.1774 13.3456 9.77724 13.7314 10.7332 14.3614C11.1927 14.6641 11.5603 14.9145 11.927 15.1642C12.3276 15.437 12.7271 15.7091 13.244 16.0479C13.3757 16.1342 13.5014 16.2239 13.6239 16.3112C14.09 16.6435 14.5088 16.9421 15.0262 16.8944C15.3268 16.8668 15.6373 16.5841 15.7951 15.741C16.1678 13.7486 16.9004 9.43151 17.0697 7.65256C17.0845 7.4967 17.0658 7.29723 17.0509 7.20967C17.0359 7.12211 17.0046 6.99735 16.8907 6.90499C16.7559 6.79562 16.5479 6.77255 16.4548 6.77419C16.0316 6.78165 15.3824 7.00739 12.2581 8.30692Z"
                                              fill="#F9F1DF"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="footer__social--item">
                                <a href="#" className="footer__social--link" title="Facebook">
                                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0.858276 11.5029C0.859585 17.0374 4.88412 21.7498 10.3502 22.6172V14.7543H7.49602V11.5029H10.3536V9.0278C10.2259 7.85499 10.6265 6.68613 11.4468 5.83823C12.267 4.99033 13.422 4.55128 14.5984 4.64014C15.4428 4.65378 16.285 4.72898 17.1185 4.86515V7.63163H15.6964C15.2069 7.5675 14.7147 7.72919 14.3585 8.07114C14.0023 8.41309 13.8207 8.89829 13.8649 9.39006V11.5029H16.9824L16.484 14.7554H13.8649V22.6172C19.7764 21.6829 23.9217 16.2841 23.2978 10.3318C22.6739 4.37955 17.4991 -0.0423576 11.5223 0.269559C5.5456 0.581476 0.859226 5.51802 0.858276 11.5029Z"
                                            fill="#F9F1DF"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <nav className="footer__nav">
                    <div className="footer__nav--row">
                        <div className="footer__nav--col">
                            <ul className="footer__nav--list">
                                <li className="footer__nav--item">
                                    <Link to={"/games"} className="footer__nav--link">
                                        Игры
                                    </Link>
                                </li>
                                <li className="footer__nav--item">
                                    <Link to={"/"} className="footer__nav--link">
                                        Главная
                                    </Link>
                                </li>
                                <li className="footer__nav--item">
                                    <Link to={"/rooms"} className="footer__nav--link">
                                        Комнаты
                                    </Link>
                                </li>
                                <li className="footer__nav--item">
                                    <Link to={"/news"} className="footer__nav--link">
                                        Новости
                                    </Link>
                                </li>
                                <li className="footer__nav--item">
                                    <a href="#" className="footer__nav--link">
                                        Преимущества
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__nav--col">
                            <ul className="footer__nav--list">
                                <li className="footer__nav--item">
                                    <a href="#" className="footer__nav--link">
                                        Правила использования
                                    </a>
                                </li>
                                <li className="footer__nav--item">
                                    <a href="#" className="footer__nav--link">
                                        Политика конфеденциальности
                                    </a>
                                </li>
                                <li className="footer__nav--item">
                                    <a href="#" className="footer__nav--link">
                                        Документ
                                    </a>
                                </li>
                                <li className="footer__nav--item">
                                    <a href="#" className="footer__nav--link">
                                        Статья о сервисе
                                    </a>
                                </li>
                                <li className="footer__nav--item">
                                    <a href="#" className="footer__nav--link">
                                        Статья
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="footer__hot">
                    <h2 className="footer__hot--title">
                        Горячие предложения!
                    </h2>
                    <ul className="footer__hot--list">

                        {gamesList[1].list_of_catalog.map((item, itemNum) => itemNum <= 3 ?
                            <li key={item.id} className="footer__hot--item">
                                <NavLink to={"/games/1/"+item.id} className="footer__hot--link" title="Название игры">
                                    <img src={item.image} loading="lazy" alt={item.title_of_game} loading="lazy" width="300"
                                             className="footer__hot--img"/>
                                </NavLink>
                            </li> : ""
                        )}

                    </ul>
                </div>
                <div className="footer__copy">
                    Все права защищены <br/>
                    Версия обновлена 10 Июля 2022
                </div>
            </div>
        </footer>
    );
};

export default Footer;