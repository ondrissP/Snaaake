// listeners
document.addEventListener("keydown", keyPush)

// canvas
const canvas = document.querySelector("canvas");
const cntxt = canvas.getContext("2d");

// player
const snakeSize = 50;
let snakePosX = 0;
let snakePosY = canvas.height / 2 - snakeSize / 2;
let snakeSpeed = 5;

// loop
function gameLoop() {
	drawStuff();
	//moveStuff();
	requestAnimationFrame(gameLoop)
}

gameLoop();

	// hybeme saaa
	function moveStuff() {
		snakePosX += snakeSpeed;

		if (snakePosX > canvas.width) {
			snakePosX = 0;
		}
	};

	/**
	 *  kresliimeee vsetko
	 **/
	function drawStuff() {
		rectangle("white", 0, 0, canvas.width, canvas.height);
		rectangle("black", snakePosX, snakePosY, snakeSize, snakeSize);
	}

	// kreslime stvorceky
	function rectangle(color, x, y, width, height) {
		cntxt.fillStyle = color
		cntxt.fillRect(x, y, width, height)
	}

	/**
	*   Ovladame hadika
	**/
	function keyPush(event) {
		switch (event.key) {
			case "ArrowUp":
				snakePosY -= snakeSpeed
				break;
			case "ArrowDown":
				snakePosY += snakeSpeed
				break;
			case "ArrowRight":
				snakePosX += snakeSpeed
				break;
			case "ArrowLeft":
				snakePosX -= snakeSpeed
				break;
		};
	}