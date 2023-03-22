const startBtn = document.querySelector('.start-button')

let game
startBtn.addEventListener('click', function() {
	game = new Game()
	startBtn.classList.add('off')
	game.showSequence()
})
