import React from 'react';
import {NavLink} from "react-router-dom";

const MainGamesList = (props) => {

    return (
        <div className="games__wrapper tab-list">

            {
                props.gamesList.map((list, listNum) =>
                    <div
                        key={listNum}
                        className={"games__wrapper--block tab-block " + (listNum === 0 ? "_active _visible" : "")}
                    >
                        <ul className="games__list">

                            {
                                props.searchValue ? list.list_of_catalog.filter(item => item.title_of_game.includes(props.searchValue)).map(item =>
                                    <li key={item.id} className="games__item" data-aos="fade-in" data-aos-delay="300">
                                        <NavLink to={"/games/"+list.catalog_id+"/"+item.id} className="games__link" title={item.title_of_game}>
                                            <picture>
                                                <img src={item.image} loading="lazy" alt={item.title_of_game}
                                                     width="200" height="200" className="games__link--img"/>
                                            </picture>
                                        </NavLink>
                                    </li>
                                ) : list.list_of_catalog.map(item =>
                                    <li key={item.id} className="games__item" data-aos="fade-in" data-aos-delay="300">
                                        <NavLink to={"/games/"+list.catalog_id+"/"+item.id} className="games__link" title={item.title_of_game}>
                                            <picture>
                                                <img src={item.image} loading="lazy" alt={item.title_of_game}
                                                     width="200" height="200" className="games__link--img"/>
                                            </picture>
                                        </NavLink>
                                    </li>
                                )
                            }

                        </ul>
                    </div>
                )
            }

        </div>
    );
};

export default MainGamesList;