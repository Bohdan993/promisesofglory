import {
	InitSlider,
	FixedMenu
} from '../model'
import {header, menu} from '../view'

const app = {
	init() {
		this.is()
		this.fm()
	},
	is(){
		InitSlider()
	},
	fm(){
		FixedMenu(menu, header)
	}

}


export {
	app
}