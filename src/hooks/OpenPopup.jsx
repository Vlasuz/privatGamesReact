import React from 'react';

const OpenPopup = (e, popupClass) => {
    e.preventDefault()
    document.querySelectorAll(".popup").forEach(popup => popup.classList.remove('_active'))
    let popup = e.target?.getAttribute('href')?.replace("#", ".")

    console.log(e, popupClass)
    popupClass ? document.querySelector(popupClass).classList.add('_active') : document.querySelector(popup).classList.add('_active')

};

export default OpenPopup;