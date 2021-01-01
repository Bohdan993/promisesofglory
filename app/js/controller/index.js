import {
	InitSlider,
	FixedMenu,
	PlayVideo
} from '../model'
import {
	header,
	menu,
	headerSlider,
	aboutSliders,
	feedbackSlider,
	playBtn,
	videoLayer,
	videoParent
} from '../view'

const app = {
	init() {
		this.is()
		this.fm()
		this.pv()
	},
	is(){
		InitSlider({
			headerSlider,
			aboutSliders,
			feedbackSlider
		})
	},
	fm(){
		FixedMenu(menu, header)
	},
	pv() {
		PlayVideo(playBtn, videoParent, videoLayer)
	}

}


export {
	app
}