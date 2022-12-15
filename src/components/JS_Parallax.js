import React from 'react';
import Parallax from "parallax-js";

const JsParallax = () => {
    console.log('sad')
    var scene = document.querySelectorAll('.parallax-scene');
    scene.forEach(scene => {
        new Parallax(scene)
    })
};

export default JsParallax;