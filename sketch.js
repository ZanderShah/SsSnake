GRID_SIZE = 20;

function randomPosition() {
    var x = floor(random(width / GRID_SIZE));
    var y = floor(random(height / GRID_SIZE));
    return createVector(x, y);
}

function setup() {
    createCanvas(500, 500);

    snake = new Snake();
    food = new Food();

    mic = new p5.SpeechRec();
    mic.continuous = true;
    mic.interimResults = true;
    mic.onResult = parseResult;
    mic.start();

    frameRate(10);
}

function parseResult() {
    var word = mic.resultString.split(' ').pop();
    console.log(word);

    if (word.indexOf('down') != -1) {
        snake.face(0, -1);
    } else if (word.indexOf('up') != -1) {
        snake.face(0, 1);
    } else if (word.indexOf('left') != -1) {
        snake.face(-1, 0);
    } else if (word.indexOf('right') != -1) {
        snake.face(1, 0);
    }
}

function draw() {
    background(53);

    if (snake.eats(food)) {
        food = new Food();
        snake.grow();
    }

    snake.update();

    snake.checkStatus();

    snake.show();
    food.show();
}

function keyPressed() {
    if (key === 'W') {
        snake.face(0, -1);
    } else if (key === 'S') {
        snake.face(0, 1);
    } else if (key === 'A') {
        snake.face(-1, 0);
    } else if (key === 'D') {
        snake.face(1, 0);
    }
}
