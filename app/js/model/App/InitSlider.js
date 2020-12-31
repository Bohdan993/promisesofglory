import {Splide} from '../../../libs/libs'




const InitSlider = () => {
	new Splide( '.splide', {
		type   : 'loop',
		// autoplay: true, 
		// interval: 4000,
		lazyLoad: 'nearby',
		pagination: false,
		pauseOnHover: true,
		cover: true,
		// classes: {
		// 	arrows: 'splide__arrows header__slider-arrrows',
		// 	arrow : 'splide__arrow header__slider-arrrow',
		// 	prev  : 'splide__arrow--prev header__slider-arrrow-prev',
		// 	next  : 'splide__arrow--next header__slider-arrrow-next',
		// },
	}).mount();
}


export default InitSlider