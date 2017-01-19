import sayHello from './lib/sayHello.js';
import {slider} from './lib/sliders.js';
import carousel from './lib/carousel.js';
import tabMenu from './lib/tabMenu.js';


$(document).ready(function() {
sayHello();
slider('#header-slider');
slider('#tech-slider');
slider('#comments-slider');
carousel();
tabMenu();
});


