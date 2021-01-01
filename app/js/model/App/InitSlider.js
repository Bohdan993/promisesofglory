import {Splide} from '../../../libs/libs'
import {default as Extention} from './SliderExtention'


console.log(Extention)
const InitSlider = (sliders) => {


	new Splide( sliders.headerSlider, {
		type   : 'loop',
		autoplay: true, 
		interval: 4000,
		// height  : '100vh',
		lazyLoad: 'nearby',
		pagination: false,
		pauseOnHover: true,
		cover: true,
	}).mount();



	for ( let i = 0, len = sliders.aboutSliders.length; i < len; i++ ) {

		new Splide( sliders.aboutSliders[ i ], {
			type   : 'fade',
			autoplay: true, 
			rewind: true,
			interval: 5000,
			arrows: false,
			speed: 1500,
			drag: false,
			lazyLoad: 'nearby',
			pagination: false,
			pauseOnHover: false
		} ).mount();
	}

	new Splide( sliders.feedbackSlider, {
		type   : 'loop',
		lazyLoad: 'nearby',
		pagination: false,
		pauseOnHover: true
	}).mount({Extention});


}


export default InitSlider