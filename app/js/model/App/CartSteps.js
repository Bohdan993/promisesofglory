
const CartSteps = (cartStepsBtn, cartStepsList, cartContentLayer, cartContentTitle) => {
	let initStep = 1
	let stopFlag = false
	let stepsWords = ['Second', 'Third', 'Fourth']

	function nextStep (e){

		if(!stopFlag) initStep++

		cartStepsList.forEach((el, ind) => {
			if(ind === (initStep - 1)) {
				el.classList.add('active')
			}
		})

		cartContentLayer.forEach((el, ind) => {
			el.classList.remove('active')
			if(ind === (initStep - 1)) {
				el.classList.add('active')
			}
		})

		cartContentTitle.innerText = `${stepsWords[initStep - 2]} Step`

		if(initStep === 4) {
			cartStepsBtn.querySelector('.btn-text').innerText = 'Submit'
			stopFlag = true
		}

		console.log(initStep)
	}

	cartStepsBtn.addEventListener('click', nextStep)
}


export default CartSteps