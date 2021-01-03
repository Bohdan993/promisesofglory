import {Splide} from '../../../libs/libs'
import {default as Extention} from './SliderExtention'


console.log(Extention)
const InitSlider = (sliders) => {

	if(sliders.headerSlider) {
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
	}

	if(sliders.aboutSliders) {
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
	}

	if(sliders.feedbackSlider) {
		new Splide( sliders.feedbackSlider, {
			type   : 'loop',
			lazyLoad: 'nearby',
			pagination: false,
			pauseOnHover: true,
			gap: '2em'
		}).mount({Extention});
	}

if(sliders.presentationImageSlider) {
	let secondarySlider = new Splide( sliders.presentationThumbnailsImageSlider, {
			rewind      : true,
			isNavigation: true,
			arrows: false,
			// focus       : 'center',
			trimSpace: true,
			pagination  : false,
			cover       : true,
			breakpoints : {
				'768': {
					fixedWidth  : 100,
					fixedHeight : 100,
				}
			}
		} ).mount();

		// Create the main slider.
		let primarySlider = new Splide( sliders.presentationImageSlider, {
			type       : 'fade',
			heightRatio: 0.5,
			pagination : false,
			arrows     : false,
			cover      : true,
		} );

		// Set the thumbnails slider as a sync target and then call mount.
		primarySlider.sync( secondarySlider ).mount();
	}
}


export default InitSlider