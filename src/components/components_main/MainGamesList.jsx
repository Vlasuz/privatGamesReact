import React from 'react';
import {NavLink} from "react-router-dom";
import {GamesListReducer} from "../../redux/reducers/gamesListReducer";
import {useSelector} from "react-redux";
import {GamesCatalogListReducer} from "../../redux/reducers/gamesCatalogListReducer";

const MainGamesList = (props) => {

    const games = useSelector(state => {
        const {GamesListReducer} = state;
        return GamesListReducer.games
    })
    const catalog = useSelector(state => {
        const {GamesCatalogListReducer} = state;
        return GamesCatalogListReducer.catalog
    })

    return (
        <div className="games__wrapper tab-list">


            {
                catalog.map((catalog, catalogNum) =>
                    <div
                        key={catalogNum}
                        className={"games__wrapper--block tab-block " + (catalogNum === 0 ? "_active _visible" : "")}>
                        <ul className="games__list">


                            {
                                games.filter(game => game.catalog_id.includes(catalogNum.toString()))?.map(game =>
                                    <li key={game.id} className="games__item" data-aos="fade-in" data-aos-delay="300">
                                        <NavLink to={"/games/" + game.id}
                                                 className="games__link" title={game.title}>
                                            <picture>
                                                <img src={game.image} loading="lazy" alt={game.title}
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