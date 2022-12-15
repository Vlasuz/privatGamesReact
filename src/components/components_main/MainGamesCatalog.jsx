import React from 'react';

const MainGamesCatalog = (props) => {

    const catalogClick = (e, itemNum) => {
        e.target.closest('.games__filter--list').querySelector('.tab-btn._active')?.classList.remove('_active')
        e.target.closest('.tab-btn').classList.add("_active")
        props.setActiveCatalog(itemNum)

        document.querySelector('.games__wrapper--block._active._visible')?.classList.remove('_visible')
        setTimeout(() => {
            document.querySelector('.games__wrapper--block._active')?.classList.remove('_active')
            document.querySelectorAll('.games__wrapper--block')[itemNum].classList.add('_active')
            setTimeout(() => {
                document.querySelectorAll('.games__wrapper--block')[itemNum].classList.add('_visible')
            }, 200)
        }, 200)

    }

    return (
        <div className="games__filter hide-on-table">
            <ul className="games__filter--list">

                {
                    props.gamesList.map((item, itemNum) =>
                        <li key={itemNum} className="games__filter--item">
                            <button
                                className={"games__filter--btn tab-btn" + (itemNum === 0 ? " _active" : "")}
                                onClick={e => catalogClick(e, itemNum)}
                            >
                                <img src={item.icon} width="13" height="13" alt=""
                                     className="games__filter--icon"/>
                                {item.catalog_name}
                            </button>
                        </li>
                    )
                }

            </ul>
        </div>
    );
};

export default MainGamesCatalog;