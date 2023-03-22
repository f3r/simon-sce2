const startBtn = document.querySelector('.start-button')
const counter = document.querySelector('.counter')

let game
startBtn.addEventListener('click', function() {
	game = new Game()
	startBtn.classList.add('off')
	counter.classList.remove('off')
	game.showSequence()
})
