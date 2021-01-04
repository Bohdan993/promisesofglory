import {
	InitSlider,
	FixedMenu,
	PlayVideo,
	BurgerMenu
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
	pv() {
		PlayVideo(playBtn, videoParent, videoLayer)
	},
	bm(){
		BurgerMenu(menuBtn, menuCloseBtn, menuList)
	}

}


export {
	app
}