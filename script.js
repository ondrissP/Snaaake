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

let velocityX = 0;
let velocityY = 0;

// loop
function gameLoop() {
	drawStuff();
	moveStuff();
	requestAnimationFrame(gameLoop)
}

gameLoop();

	// hybeme saaa
	function moveStuff() {
		snakePosX += snakeSpeed * velocityX;
		snakePosY += snakeSpeed * velocityY;

		if (snakePosX > canvas.width) {
			snakePosX = 0;
		}
		if (snakePosX < -snakeSize ) {
			snakePosX = canvas.width
		}
		if (snakePosY > canvas.height) {
			snakePosY = 0;
		}
		if (snakePosY < -snakeSize ) {
			snakePosY = canvas.height
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
				if (velocityY != 1) {
					velocityX = 0
					velocityY = -1
				}
				break;
			case "ArrowDown":
				if (velocityY != -1) {
					velocityX = 0
					velocityY = 1
				}
				break;
			case "ArrowRight":
				if (velocityX != -1) {
					velocityX = 1
					velocityY = 0
				}
				break;
			case "ArrowLeft":
				if (velocityX != 1) {
					velocityX = -1
					velocityY = 0
				}
				break;
		};
	}