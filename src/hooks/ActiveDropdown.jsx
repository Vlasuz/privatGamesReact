import React from 'react';
import {useEffect, useState} from "react";

const ActiveDropdown = (funcToClose, endBlockClick) => {

    const clickAnywhere = (e) => {
        if (!e.target.closest(endBlockClick)) {
            funcToClose(false)
        }
    }
    useEffect(() => {
        document.addEventListener('click', e => clickAnywhere(e))
    })

    return (
        <div>

        </div>
    );
};

export default ActiveDropdown;