import {Splide} from '../../../libs/libs'




const InitSlider = () => {
	new Splide( '.splide', {
		type   : 'loop',
		// autoplay: true, 
		// interval: 4000,
		pagination: false,
		pauseOnHover: true,
		cover: true
	}).mount();
}


export default InitSlider