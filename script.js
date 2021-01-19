// listeners
document.addEventListener("keydown", keyPush)

// canvas
const canvas = document.querySelector("canvas");
const cntxt = canvas.getContext("2d");

// player
const snakeSize = 50;
let snakePosX = 0;
let snakePosY = canvas.height / 2;
let snakeSpeed = snakeSize;

let velocityX = 0;
let velocityY = 0;

const tileCountX = canvas.width / snakeSize;
const tileCountY = canvas.height / snakeSize;

// loop
function gameLoop() {
	drawStuff();
	moveStuff();
	setTimeout(gameLoop, 1000/15)
}

gameLoop();

	// hybeme saaa
	function moveStuff() {
		snakePosX += snakeSpeed * velocityX;
		snakePosY += snakeSpeed * velocityY;

		if (snakePosX + snakeSize > canvas.width) {
			snakePosX = 0;
		}
		if (snakePosX < 0 ) {
			snakePosX = canvas.width
		}
		if (snakePosY + snakeSize > canvas.height) {
			snakePosY = 0;
		}
		if (snakePosY < 0 ) {
			snakePosY = canvas.height
		}
	};

	/**
	 *  kresliimeee vsetko
	 **/
	function drawStuff() {
		// background
		rectangle("#bada55", 0, 0, canvas.width, canvas.height);
		// grid
		drawGrid();
		// snake
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
				if (velocityY !== 1) {
					velocityX = 0
					velocityY = -1
				}
				break;
			case "ArrowDown":
				if (velocityY !== -1) {
					velocityX = 0
					velocityY = 1
				}
				break;
			case "ArrowRight":
				if (velocityX !== -1) {
					velocityX = 1
					velocityY = 0
				}
				break;
			case "ArrowLeft":
				if (velocityX !== 1) {
					velocityX = -1
					velocityY = 0
				}
				break;
		};
	}

	// kreslime grid
	function drawGrid() {
		for (let i = 0; i < tileCountX; i++) {
			for (let j = 0; j <tileCountY; j++){
				rectangle("white", snakeSize * i, snakeSize * j, snakeSize - 1, snakeSize - 1);
			}
		}
	}