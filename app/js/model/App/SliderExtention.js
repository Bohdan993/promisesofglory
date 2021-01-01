export default ( Splide, Components ) => {
	return {
		mount() {
			this.slides = Components.Elements.slides
			// Initialize height.
			Splide.root.style.height = this.slides[Splide.index].querySelector('.feedback__inner').clientHeight + 33 + 'px'
			this.bind()
		},
		bind() {
			Splide.on( 'move', newIndex => {
				Splide.root.style.height = this.slides[newIndex].querySelector('.feedback__inner').clientHeight + 'px';
			} )

			Splide.on('lazyload:loaded', img=> {
				console.log(img)
			})
		},
	}
}
