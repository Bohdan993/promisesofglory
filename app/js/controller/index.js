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
	videoParent,
	presentationImageSlider,
	presentationThumbnailsImageSlider
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
	}

}


export {
	app
}