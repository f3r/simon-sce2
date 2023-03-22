function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Color() {
	const colors = ['blue','yellow','green','red']
	this.color = colors[getRandomInt(colors.length)]
}
