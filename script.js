// listeners
document.addEventListener("keydown", keyPush)


// canvas
const canvas = document.querySelector("canvas");
const title = document.querySelector("h1")
const cntxt = canvas.getContext("2d");

// game
let gameIsRunning = true;
const fps = 10;
const tileSize = 50;
const tileCountX = canvas.width / tileSize;
const tileCountY = canvas.height / tileSize;
const snakeRadius =  tileSize / 2;
let snakeLength = 3;
let score = 0;

// player
let snakePosX = 0;
let snakePosY = canvas.height / 2;
let snakeSpeed = tileSize;
let velocityX = 1;
let velocityY = 0;

let tail = []

// fooood
let foodPosX;
let foodPosY;

// loop
function gameLoop() {
	if (gameIsRunning) {
		drawStuff();
		moveStuff();
		setTimeout(gameLoop, 1000/fps)
	}
}

resetFood();
gameLoop();

	// hybeme saaa
	function moveStuff() {
		snakePosX += snakeSpeed * velocityX;
		snakePosY += snakeSpeed * velocityY;

		// wall collision
		if (snakePosX + snakeRadius > canvas.width) {
			snakePosX = 0;
		}
		if (snakePosX < 0 ) {
			snakePosX = canvas.width
		}
		if (snakePosY > canvas.height) {
			snakePosY = tileSize;
		}
		if (snakePosY - tileSize < 0) {
			snakePosY = canvas.height
		}

		tail.forEach((snakePart) => {
			if (snakePosX === snakePart.x && snakePosY === snakePart.y){
				gameOver();
			}
		});

		// tail
		tail.push({x: snakePosX , y: snakePosY})

		tail = tail.slice(-1 * snakeLength);

		// food collision
			if (snakePosX === foodPosX && snakePosY - tileSize === foodPosY) {
				score++;
				snakeLength++;
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

		// food
		rectangle("orange", foodPosX, foodPosY, tileSize, tileSize);

		// tail
		tail.forEach((snakePart) =>
		//rectangle('#555', snakePart.x, snakePart.y, tileSize, tileSize))

		circle("#555", (snakePart.x + snakeRadius), (snakePart.y - snakeRadius), snakeRadius)
		)

		// snake head rectangle
		//rectangle("black", snakePosX, snakePosY, tileSize, tileSize);

		//snake head circle
		circle("black", (snakePosX + snakeRadius), (snakePosY - snakeRadius), snakeRadius);
			};

	// kreslime stvorceky
	function rectangle(color, x, y, width, height) {
		cntxt.fillStyle = color
		cntxt.fillRect(x, y, width, height)
	}

	// kreslime kruzky
	function circle(color, x, y, radius) {

		cntxt.beginPath();
		cntxt.arc(x, y, radius, 0, 2 * Math.PI);
		cntxt.fillStyle = color;
		cntxt.fill();
		cntxt.lineWidth = 5;
		cntxt.strokeStyle = color
		cntxt.stroke();
	}

	// randomize food position
	function resetFood() {
		if (snakeLength === tileCountX * tileCountY) {
			gameOver();
		}
		foodPosX = Math.floor(Math.random() * tileCountX) * tileSize;
		foodPosY = Math.floor(Math.random() * tileCountY) * tileSize;

		// nedavaj jedlo na hlavu
		if (foodPosX === snakePosX && foodPosY === snakePosY) {
			resetFood();
		}
		// nedavaj jedlo na telo
		if (tail.some(snakePart => snakePart.x === foodPosX && snakePart.y === foodPosY)){
			resetFood();
		}

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
			default:
				// restart game
				if (! gameIsRunning) location.reload();
				break;
		}
	}

	// kreslime grid
	function drawGrid() {
		for (let i = 0; i < tileCountX; i++) {
			for (let j = 0; j <tileCountY; j++){
				rectangle("white", tileSize * i, tileSize * j, tileSize - 1, tileSize - 1);
			}
		}
	}

	// Game Over
	function gameOver() {
		gameIsRunning = false;
	}