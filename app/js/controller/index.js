import {
	InitSlider,
	FixedMenu,
	PlayVideo,
	BurgerMenu,
	LazyLoad
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
	presentationThumbnailsImageSlider
} from '../view'

const app = {
	init() {
		this.is()
		this.fm()
		this.pv()
		this.bm()
		this.ll()
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
	}

}


export {
	app
}