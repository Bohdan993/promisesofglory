import { throttle } from './Helpers'

const BurgerMenu = (menuBtn, closeBtn, menu) => {
	let menuOpen = false
	function openMenu (e){
		if(!menuOpen) {
				// menuBtn.classList.add('open')
				menu.classList.add('fixed')
				menuOpen = true
		}
	}

	function closeMenu (e) {
		if(menuOpen) {
			menu.classList.remove('fixed')
			menuOpen = false
		}
	}


	menuBtn.addEventListener('click', openMenu)
	closeBtn.addEventListener('click', closeMenu)
}


export default BurgerMenu