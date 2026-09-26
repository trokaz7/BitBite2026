var canvasWidth = 1000;
var canvasHeight = 750;

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

function draw() {
    background(220);

    let c = color(255, 0, 0);
    fill(c);
    circle(canvasWidth / 2, canvasHeight / 2, 100);
}
