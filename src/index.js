import RoadRunner from './scripts/game';
import Road from './scripts/road';


const canvas = document.getElementById('car-game');
const canvas2 = document.getElementById('car-game-road');
const roadnew = new Road(canvas2)
//  new RoadRunner(canvas)

roadnew.animate();
// new RoadRunner(canvas);

var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var carHeight = 180;
var carWidth = 92;
var carX = (canvas.width - carWidth) / 2;
var carY = (canvas.width - carWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var score = 0;
var lives = 3;

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'src/images/car.png';
imgArray[1] = new Image();
imgArray[1].src = 'src/images/Audi.png';
imgArray[2] = new Image();
imgArray[2].src = 'src/images/Mini_van.png';

var traffic = [
{ "id": "enemy1", "x": 200, "y": -20, "w": 70, "h": 140, "speed": 1},
{ "id": "enemy2", "x": 320, "y": -20, "w": 70, "h": 140, "speed": 2},
{ "id": "enemy3", "x": 450, "y": -20, "w": 70, "h": 140, "speed": .5 },
{ "id": "enemy4", "x": 320, "y": -20, "w": 70, "h": 140, "speed": 2 },
];

function renderTraffic() {
    for (var i = 0; i < traffic.length; i++) {

        ctx.drawImage(imgArray[0], traffic[i].x, traffic[i].y += traffic[i].speed, traffic[i].w, traffic[i].h);
    }
}

function hitDetect(m, mi) {
    for (var i = 0; i < traffic.length; i++) {
        var e = traffic[i];
        if (carX + carWidth >= e.x && carX <= e.x + e.w && carY >= e.y && carY <= e.y + e.h) {
             // Remove the missile
            traffic.splice(i, 1); // Remove the enemy that the missile hit
            
        }
    }
}


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if (e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if (e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
    else if (e.key == "Up" || e.key == "ArrowUp") {
        upPressed = false;
    }
    else if (e.key == "Down" || e.key == "ArrowDown") {
        downPressed = false;
    }
}

function drawcar() {
    ctx.beginPath();
    var img = new Image();
    img.src = "src/images/murci_sv.png";
    ctx.drawImage(img, 0, 0, 646, 1339, carX, carY, carWidth, carHeight);
    ctx.fill();
    ctx.closePath();
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
}
function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawcar();
    drawScore();
    drawLives();
    hitDetect();
    renderTraffic();
    

    if (rightPressed && carX < canvas.width - carWidth) {
        carX += 7;
    }
    else if (leftPressed && carX > 0) {
        carX -= 7;
    }
    else if (upPressed && carY > 0) {
        carY -= 7;
    }
    else if (downPressed && carY > 0) {
        carY += 7;
    }
    

    x += dx;
    y += dy;
    requestAnimationFrame(draw);
}

draw();
