import React from 'react';
import {NavLink} from "react-router-dom";

const TextPage = () => {
    return (
        <main className="main">
            <section className="text-section page-padding-top">
                <div className="text-section__container container">
                    <div className="text-section__header page-header" data-aos="fade-in" data-aos-delay="200">
                        <a href="#" className="text-section__forward-btn page-header__forward-btn" title="Назад">
                            <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.25 3.49991C0.25 3.35065 0.304932 3.20132 0.414795 3.08757L3.2273 0.170898C3.44702 -0.0569662 3.80298 -0.0569662 4.02271 0.170898C4.24243 0.398763 4.24243 0.767904 4.02271 0.995768L1.60703 3.49991L4.02227 6.0046C4.24199 6.23246 4.24199 6.6016 4.02227 6.82947C3.80254 7.05733 3.44658 7.05733 3.22686 6.82947L0.414356 3.9128C0.304493 3.79887 0.25 3.64939 0.25 3.49991Z"
                                    fill="#F9F1DF"/>
                            </svg>
                        </a>
                        <h2 className="text-section__section-title section-title page-header__title _decor-none">
                            тЕКСТОВАЯ ИНФОРМАЦИЯ
                        </h2>
                        <div className="text-section__bread-crumbs page-header__bread-crumbs">
                            <ul className="page-header__bread-crumbs--list">
                                <li className="page-header__bread-crumbs--item">
                                    <NavLink to={'/'} className="page-header__bread-crumbs--link">
                                        Главная
                                    </NavLink>
                                </li>
                                <li className="page-header__bread-crumbs--item">
                                    <a className="page-header__bread-crumbs--link">
                                        Новости компании
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-section__main" data-aos="fade-in" data-aos-delay="400">
                        <div className="text-section__content">
                            <h3>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </h3>
                            <p>
                                Ut a enim hendrerit, dignissim tellus vitae, porttitor purus. Ut laoreet odio ut ipsum
                                accumsan, et varius diam pretium. Maecenas vitae ullamcorper magna, et vehicula mi. Sed
                                nec risus mattis, condimentum nulla id, venenatis magna. Suspendisse in mollis arcu.
                                Nulla viverra porttitor ligula quis vulputate.
                            </p>
                            <h3>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </h3>
                            <p>
                                Vivamus at feugiat sem. Fusce elit lacus, fermentum quis interdum quis, efficitur quis
                                justo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a enim hendrerit,
                                dignissim tellus vitae, porttitor purus. Ut laoreet odio ut ipsum accumsan, et varius
                                diam pretium. Maecenas vitae ullamcorper magna, et vehicula mi. Sed nec risus mattis,
                                condimentum nulla id, venenatis magna. Suspendisse in mollis arcu. Nulla viverra
                                porttitor ligula quis vulputate. Vivamus at feugiat sem. Fusce elit lacus, fermentum
                                quis interdum quis, efficitur quis justo.
                            </p>
                            <p>
                                Ut a enim hendrerit, dignissim tellus vitae, porttitor purus. Ut laoreet odio ut ipsum
                                accumsan, et varius diam pretium. Maecenas vitae ullamcorper magna, et vehicula mi. Sed
                                nec risus mattis, condimentum nulla id, venenatis magna. Suspendisse in mollis arcu.
                                Nulla viverra porttitor ligula quis vulputate.
                            </p>
                            <h3>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </h3>
                            <p>
                                Vivamus at feugiat sem. Fusce elit lacus, fermentum quis interdum quis, efficitur quis
                                justo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a enim hendrerit,
                                dignissim tellus vitae, porttitor purus. Ut laoreet odio ut ipsum accumsan, et varius
                                diam pretium. Maecenas vitae ullamcorper magna, et vehicula mi. Sed nec risus mattis,
                                condimentum nulla id, venenatis magna. Suspendisse in mollis arcu. Nulla viverra
                                porttitor ligula quis vulputate. Vivamus at feugiat sem. Fusce elit lacus, fermentum
                                quis interdum quis, efficitur quis justo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TextPage;