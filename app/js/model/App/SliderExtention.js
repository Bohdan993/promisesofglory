import {throttle} from './Helpers.js'


export default ( Splide, Components ) => {
	console.log(Splide, Components)
	return {
		mount() {
			this.slides = Components.Elements.slides
			// Initialize height.
			Splide.root.style.height = this.slides[Splide.index].querySelector('.feedback__inner').clientHeight + 33 + 'px'
			this.bind()
		},
		bind() {
			Splide.on( 'move', newIndex => {
				console.log(newIndex)
				Splide.root.style.height = this.slides[newIndex].querySelector('.feedback__inner').clientHeight + 'px';
			} )

			// Splide.on('lazyload:loaded', img=> {
			// 	console.log(img)
			// })

			let resizeFunc = () => {
				this.slides.forEach((el, ind) => {
					if(el.classList.contains('is-active')) {
						Splide.root.style.height = this.slides[ind].querySelector('.feedback__inner').clientHeight + 'px';
					}
				})
			}

			resizeFunc = throttle(resizeFunc, 1500)

			Splide.on('resize', resizeFunc)

			
		},
	}
}
