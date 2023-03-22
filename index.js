let game = new Game()

document
	.querySelector('.start-button')
	.addEventListener('click', function(event) {
		game.start()
		event.stopPropagation()
	})
