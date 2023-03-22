function Game() {
	this.sequence = [new Color()]
	this.userSequence = [...this.sequence]

	// Counter
	this.score = 0
	this.counterHTML = document.getElementById('counter')

	// Game status - can player click?
	this.playable = false

	// HTML Elements for colors
	this.red = document.querySelector('.red')
	this.blue = document.querySelector('.blue')
	this.yellow = document.querySelector('.yellow')
	this.green = document.querySelector('.green')

	this.startBtn = document.querySelector('.start-button')
	this.counterWrapper = document.querySelector('.counter')
	this.makeClickable()
}

Game.prototype.start = function() {
	this.startBtn.classList.add('off')
	this.counterWrapper.classList.remove('off')
	game.showSequence()
}

Game.prototype.showSequence = function() {
	this.sequence.forEach((colorObj, idx) => {
		const nextColor = colorObj.color

		// poner el color
		setTimeout(() =>{
			this[nextColor].classList.add(`${nextColor}-dark`)
		}, idx*1000)

		// quitarlo en un segundo
		setTimeout(() => {
			this[nextColor].classList.remove(`${nextColor}-dark`)
		} ,idx*1000 + 500)
	})

	// Let the user play after everything is finished
	setTimeout(() => {
		this.playable = true
	}, this.sequence.length * 1000)
}

Game.prototype.addScore = function() {
	this.score++
	this.counterHTML.innerText = this.score
}

Game.prototype.increaseSequence = function() {
	this.sequence.push(new Color())
	this.userSequence = [...this.sequence]
	this.addScore()
}

Game.prototype.checkColor = function (userColor) {
	if (!this.playable) return;

	if (userColor === this.userSequence[0].color) {
		// quitamos el primer color
		this.userSequence.shift()

		// GANE ESTA RONDA
		if (this.userSequence.length === 0) {
			this.increaseSequence()
			setTimeout(function() {
				this.showSequence()
			}.bind(this), 1500);
			this.playable = false
		}
	} else {
		this.counterHTML.innerText = 'GAME OVER'
		this.score = 0
		this.sequence = [new Color()]
		this.userSequence = [...this.sequence]

		setTimeout(() => {
			this.startBtn.classList.remove('off')
			this.counterWrapper.classList.add('off')
			this.counterHTML.innerText = 0
		} ,2000)
	}
}

Game.prototype.makeClickable = function() {
	this.red.addEventListener('click', (event) => {
		this.checkColor('red')
		event.stopPropagation()
	})
	this.blue.addEventListener('click', (event) => {
		this.checkColor('blue')
		event.stopPropagation()
	})
	this.yellow.addEventListener('click', (event) => {
		this.checkColor('yellow')
		event.stopPropagation()
	})
	this.green.addEventListener('click', (event) => {
		this.checkColor('green')
		event.stopPropagation()
	})
}
