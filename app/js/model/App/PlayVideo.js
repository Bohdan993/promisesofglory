

const PlayVideo = (btn, parent, layer) => {
	function play(e){
		// console.log(this.closest(`.${layer.className}`))
		let youtube = this.closest(`.${parent.className}`).querySelector(`.${layer.className}`).getAttribute('data-youtube'),
		frame = '<iframe src="https://www.youtube.com/embed/' + youtube +'?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>'


		layer.insertAdjacentHTML('afterbegin', frame)

		console.log(youtube);
	}


	btn.addEventListener('click', play)
}


export default PlayVideo