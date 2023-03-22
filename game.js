function Game() {
	this.sequence = [new Color()]

	// HTML Elements for colors
	this.red = document.querySelector('.red')
	this.blue = document.querySelector('.blue')
	this.yellow = document.querySelector('.yellow')
	this.green = document.querySelector('.green')
}

Game.prototype.showSequence = function() {
	const nextColor = this.sequence[0].color
	this[nextColor].classList.add(`${nextColor}-dark`)

	// poner el color y quitarlo en un segundo
	setTimeout(() => {
		this[nextColor].classList.remove(`${nextColor}-dark`)
		this.makeClickable()
	} ,1000)
}

Game.prototype.checkColor = function (userColor) {
	if (userColor === this.sequence[0].color) {
		alert('you win')
	} else {
		alert('you loose')
	}
}

Game.prototype.makeClickable = function() {
	this.red.addEventListener('click', () => {
		this.checkColor('red')
	})
	this.blue.addEventListener('click', () => {
		this.checkColor('blue')
	})
	this.yellow.addEventListener('click', () => {
		this.checkColor('yellow')
	})
	this.green.addEventListener('click', () => {
		this.checkColor('green')
	})
}
