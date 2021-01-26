import {
	InitSlider,
	FixedMenu,
	PlayVideo,
	BurgerMenu,
	LazyLoad,
	Cart,
	CartSteps
} from '../model'
import {
	header,
	menu,
	menuBtn,
	menuCloseBtn,
	menuList,
	headerSlider,
	aboutSliders,
	feedbackSlider,
	playBtn,
	videoLayer,
	videoParent,
	presentationImageSlider,
	presentationThumbnailsImageSlider,
	cartBtn,
	cartCloseBtn,
	cart,
	cartStepsButton,
	cartStepsList,
	cartContentLayer,
	cartContentTitle,
	body
} from '../view'

const app = {
	init() {
		this.is()
		this.fm()
		this.pv()
		this.bm()
		this.ll()
		this.c()
		this.cs()
	},
	is(){
		InitSlider({
			headerSlider,
			aboutSliders,
			feedbackSlider,
			presentationImageSlider,
			presentationThumbnailsImageSlider
		})
	},
	fm(){
		FixedMenu(menu, header)
	},
	pv(){
		PlayVideo(playBtn, videoParent, videoLayer)
	},
	bm(){
		BurgerMenu(menuBtn, menuCloseBtn, menuList)
	},
	ll(){
		LazyLoad()
	},
	c(){
		Cart(cartBtn, cartCloseBtn, cart)
	},
	cs(){
		CartSteps(cartStepsButton, cartStepsList, cartContentLayer, cartContentTitle)
	}

}


export {
	app
}