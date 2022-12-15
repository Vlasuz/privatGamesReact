import React from 'react';

const Pagination = () => {
    return (
        <div className="page-rooms__pagination hide-on-table" data-aos="fade-in" data-aos-delay="200">
            <div className="page-pagination">
                <div className="page-pagination__wrapper">
                    <a href="#" className="page-pagination__btn _prev _disabled">
                        <svg width="9" height="12" viewBox="0 0 9 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.16016 1.41L3.58016 6L8.16016 10.59L6.75016 12L0.750156 6L6.75016 0L8.16016 1.41Z"
                                fill="#474747"/>
                        </svg>
                    </a>
                    <ul className="page-pagination__list">
                        <li className="page-pagination__item">
                            <a href="#" className="page-pagination__link _current">
                                1
                            </a>
                        </li>
                        <li className="page-pagination__item">
                            <a href="#" className="page-pagination__link">
                                2
                            </a>
                        </li>
                        <li className="page-pagination__item">
                            <a href="#" className="page-pagination__link">
                                ...
                            </a>
                        </li>
                        <li className="page-pagination__item">
                            <a href="#" className="page-pagination__link">
                                9
                            </a>
                        </li>
                        <li className="page-pagination__item">
                            <a href="#" className="page-pagination__link">
                                10
                            </a>
                        </li>
                    </ul>
                    <a href="#" className="page-pagination__btn _next">
                        <svg width="9" height="12" viewBox="0 0 9 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.839844 1.41L5.41984 6L0.839844 10.59L2.24984 12L8.24984 6L2.24984 0L0.839844 1.41Z"
                                fill="white"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Pagination;