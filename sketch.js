var GRID_SIZE = 16;

var mic = new p5.SpeechRec();
mic.continuous = true;
mic.interimResults = true;
var snake, food, fimg;

function randomPosition() {
    var x = floor(random(width / GRID_SIZE));
    var y = floor(random(height / GRID_SIZE));
    return createVector(x, y);
}

function setup() {
    createCanvas(500, 500);

    snake = new Snake();
    food = new Food();
    fimg = loadImage("img/food.png");

    mic.onResult = parseResult;
    mic.start();

    frameRate(10);
}

function parseResult() {
    var word = mic.resultString.split(' ').pop();
    console.log(word);

    if (word.indexOf('d') != -1) {
        snake.face(0, 1);
    } else if (word.indexOf('u') != -1) {
        snake.face(0, -1);
    } else if (word.indexOf('l') != -1) {
        snake.face(-1, 0);
    } else if (word.indexOf('r') != -1) {
        snake.face(1, 0);
    }
}

function draw() {
    background(0);

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
