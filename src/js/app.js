import sayHello from './lib/sayHello.js';
import {slider} from './lib/sliders.js';
import tabMenu from './lib/tabMenu.js';
import carousel from './lib/carousel.js';
import createMap from './lib/map.js';
$(document).ready(function () {
    sayHello();
    slider('#header-slider');
    slider('#tech-slider');
    slider('#comments-slider');
    tabMenu(4, 8);
    carousel(160, 50, 4);
    createMap();
});