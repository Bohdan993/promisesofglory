import { throttle } from './Helpers'

const FixedMenu = (menu, header) => {
	// console.log(menu)
	// @argument menu - 
	// @argument header - 
	//dd
	function fixed(e){
		// console.log(this.scrollY)
		if(window.scrollY > 1) {
			menu.classList.add('fixed')
			header.classList.add('full')
		} else {
			menu.classList.remove('fixed')
			header.classList.remove('full')
		}
	}

	fixed = throttle(fixed, 100)

	window.addEventListener('scroll', fixed)
	fixed()
}


export default FixedMenu