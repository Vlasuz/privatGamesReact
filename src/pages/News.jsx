import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import Pagination from "./../components/Pagination";

const News = (props) => {
    let numOfArticles = 0


    return (
        <main className="main">
            <section className="news section-page-bg-wrapper page-padding-top">
                <div className="news__bg section-page-bg" data-aos="fade-in" data-aos-delay="600">
                    <div className="section-page-bg__element">
                        <picture>
                            <source srcSet="images/news/bg-1.webp" type="image/webp"/>
                            <img src="images/news/bg-1.png" loading="lazy" alt="" width="0" height="0"
                                 className="section-page-bg__img"/>
                        </picture>
                    </div>
                    <div className="section-page-bg__element">
                        <picture>
                            <source srcSet="images/news/bg-2.webp" type="image/webp"/>
                            <img src="images/news/bg-2.png" loading="lazy" alt="" width="0" height="0"
                                 className="section-page-bg__img"/>
                        </picture>
                    </div>
                </div>
                <div className="news__container container">
                    <div className="news__header page-header" data-aos="fade-in" data-aos-delay="200">
                        <NavLink to={"/"} className="news__forward-btn page-header__forward-btn" title="Назад">
                            <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.25 3.49991C0.25 3.35065 0.304932 3.20132 0.414795 3.08757L3.2273 0.170898C3.44702 -0.0569662 3.80298 -0.0569662 4.02271 0.170898C4.24243 0.398763 4.24243 0.767904 4.02271 0.995768L1.60703 3.49991L4.02227 6.0046C4.24199 6.23246 4.24199 6.6016 4.02227 6.82947C3.80254 7.05733 3.44658 7.05733 3.22686 6.82947L0.414356 3.9128C0.304493 3.79887 0.25 3.64939 0.25 3.49991Z"
                                    fill="#F9F1DF"/>
                            </svg>
                        </NavLink>
                        <h2 className="news__section-title section-title page-header__title _decor-none">
                            Новости комании
                        </h2>
                        <div className="news__bread-crumbs page-header__bread-crumbs">
                            <ul className="page-header__bread-crumbs--list">
                                <li className="page-header__bread-crumbs--item">
                                    <NavLink to={"/"} className="page-header__bread-crumbs--link">
                                        Главная
                                    </NavLink>
                                </li>
                                <li className="page-header__bread-crumbs--item">
                                    <a className="page-header__bread-crumbs--link">
                                        Новости комании
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="news__last" data-aos="fade-in" data-aos-delay="400">
                        <div className="last-news__row">
                            <div className="last-news__list">
                                <article className="last-news__large-article" data-aos="fade-in" data-aos-delay="400">
                                    <NavLink to={props.newsList[0].id} className="last-news__large-article--body"
                                             title="Название новости или статьи">
                                        <div className="last-news__large-article--image">
                                            <picture>
                                                <source srcSet="images/main-page/news/image-large.webp"
                                                        type="image/webp"/>
                                                <img src="images/main-page/news/image-large.jpg" alt="" width="400"
                                                     loading="lazy" className="last-news__large-article--img"/>
                                            </picture>
                                        </div>
                                        <h3 className="last-news__large-article--title">
                                            Название новости или статьи
                                        </h3>
                                        <time className="last-news__large-article--time" dateTime="2022-12-12">
                                            12 / 12 / 2022
                                        </time>
                                        <div className="last-news__large-article--text">
                                            Proin orci ex, ornare non auctor sit amet, egestas id neque. Donec non
                                            eleifend
                                        </div>
                                    </NavLink>
                                </article>
                                <div className="last-news__article--list">

                                    {
                                        props.newsList.map(news => numOfArticles < 3 && news.type === 'company' ?
                                            <article key={news.id} className="last-news__article" data-aos="fade-up" data-aos-delay="600" data-aos-anchor=".last-news__article--list">
                                                <input type="hidden" value={numOfArticles++}/>
                                                <NavLink to={news.id} className="last-news__article--body">
                                                    <div className="last-news__article--info">
                                                        <h3 className="last-news__article--title">
                                                            {news.title}
                                                        </h3>
                                                        <time className="last-news__article--time"
                                                              dateTime="2022-12-12">
                                                            {/*12 / 12 / 2022*/}
                                                            {news.date[0]}
                                                        </time>
                                                        <div className="last-news__article--text">
                                                            {news.text}
                                                        </div>
                                                    </div>
                                                    <div className="last-news__article--image">
                                                        <picture>
                                                            <img src={news.image} loading="lazy" alt=""
                                                                 width="250" className="last-news__article--img"/>
                                                        </picture>
                                                    </div>
                                                </NavLink>
                                            </article>
                                            : ""
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="news-list" data-aos="fade-in" data-aos-delay="600">
                <div className="news-list__container container">
                    <h2 className="news-list__title section-title">
                        Остальные новости
                    </h2>
                    <ul className="news-list__row">

                        {
                            props.newsList.map(news => news.type === "other" ?
                                <li key={news.id} className="news-list__item" data-aos="fade-up" data-aos-delay="300">
                                    <NavLink to={news.id} className="news-list__item--body">
                                        <div className="news-list__item--image">
                                            <div className="news-list__item--image-body">
                                                <picture>
                                                    <img src={news.image} loading="lazy" alt="" width="311" height="150"
                                                         className="news-list__item--img"/>
                                                </picture>
                                            </div>
                                        </div>
                                        <h3 className="news-list__item--title" title="Название новости или статьи">
                                            {news.title}
                                        </h3>
                                        <time className="news-list__item--time" dateTime="2022-12-12">
                                            {/*12 / 12 / 2022*/}
                                            {news.date[0]}
                                        </time>
                                        <div className="news-list__item--text">
                                            {news.text}
                                        </div>
                                        <div className="news-list__item--footer">
                                            <span className="news-list__item--link">Смотреть статью</span>
                                        </div>
                                    </NavLink>
                                </li> : ""
                            )
                        }

                    </ul>
                    <Pagination/>
                </div>
            </section>
        </main>
    );
};

export default News;