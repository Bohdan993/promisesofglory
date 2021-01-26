
const Cart = (cartBtn, closeBtn, cart) => {
	let cartOpen = false
	function openCart (e){
		if(!cartOpen) {
				// cartBtn.classList.add('open')
				cart.classList.add('fixed')
				cartOpen = true
		}
	}

	function closeCart (e) {
		if(cartOpen) {
			cart.classList.remove('fixed')

			cartOpen = false
		}
	}


	cartBtn.addEventListener('click', openCart)
	closeBtn.addEventListener('click', closeCart)
}


export default Cart