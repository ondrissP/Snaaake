// listeners
document.addEventListener("keydown", keyPush)

// canvas
const canvas = document.querySelector("canvas");
const title = document.querySelector("h1")
const cntxt = canvas.getContext("2d");

// player
const snakeSize = 50;
let snakePosX = 0;
let snakePosY = canvas.height / 2;
let snakeSpeed = snakeSize;
let velocityX = 0;
let velocityY = 0;

// fooood
let foodPosX = 0;
let foodPosY = 0;

// game
const tileCountX = canvas.width / snakeSize;
const tileCountY = canvas.height / snakeSize;
let score = 0;
// loop
function gameLoop() {
	drawStuff();
	moveStuff();
	setTimeout(gameLoop, 1000/10)
}

resetFood();
gameLoop();

	// hybeme saaa
	function moveStuff() {
		snakePosX += snakeSpeed * velocityX;
		snakePosY += snakeSpeed * velocityY;

		// wall collision
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

		// food collision
			if (snakePosX === foodPosX && snakePosY === foodPosY) {
				score++;
				title.textContent = score;
				resetFood()
			}
		}

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
		// food
		rectangle("orange", foodPosX, foodPosY, snakeSize, snakeSize);
	}

	// kreslime stvorceky
	function rectangle(color, x, y, width, height) {
		cntxt.fillStyle = color
		cntxt.fillRect(x, y, width, height)
	}

	// randomize food position
	function resetFood() {
		foodPosX = Math.floor(Math.random() * tileCountX) * snakeSize;
		foodPosY = Math.floor(Math.random() * tileCountY) * snakeSize;
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
		}
	}

	// kreslime grid
	function drawGrid() {
		for (let i = 0; i < tileCountX; i++) {
			for (let j = 0; j <tileCountY; j++){
				rectangle("white", snakeSize * i, snakeSize * j, snakeSize - 1, snakeSize - 1);
			}
		}
	}