import RoadRunner from './scripts/game';
import Road from './scripts/road';


const canvas = document.getElementById('car-game');
const canvas2 = document.getElementById('car-game-road');
const roadnew = new Road(canvas2)
// new RoadRunner(canvas)
//  new RoadRunner(canvas)


// new RoadRunner(canvas);


roadnew.animate();

const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let carHeight = 155;
let carWidth = 78;
let carX = (canvas.width - carWidth) / 2;
let carY = (canvas.width - carWidth) / 2;
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let score = 0;
let lives = 3;


let traffic = [];
let coins = [];
let hearts = [];

const coinImg = new Array();
coinImg[0] = new Image();
coinImg[0].src = 'src/images/Gold_21.png';
coinImg[1] = new Image();
coinImg[1].src = 'src/images/Silver_21.png';
coinImg[2] = new Image();
coinImg[2].src = 'src/images/Bronze_21.png';

const carImg= new Array();
carImg[0] = new Image();
carImg[0].src = 'src/images/green_mini.png';
carImg[1] = new Image();
carImg[1].src = 'src/images/tan_volvo.png';
carImg[2] = new Image();
carImg[2].src = 'src/images/vw_bus.png';
carImg[3] = new Image();
carImg[3].src = 'src/images/green_muscle.png';
carImg[4] = new Image();
carImg[4].src = 'src/images/white_range.png';
carImg[5] = new Image();
carImg[5].src = 'src/images/blue_vert.png';
carImg[6] = new Image();
carImg[6].src = 'src/images/red_hatch.png';





function addCar() {
    const lanes = [200, 320, 450, 580];
    // const width = [70, 85, 110, 110, 110, 85];
    // const height = [140, 160, 220, 220, 220, 160];
    const width = [57, 87, 95, 77, 87, 87, 74];
    const height = [117, 176, 204, 170, 176, 176, 145];
    
    const randLane = lanes[(Math.floor(Math.random() * 4))]
    const randCar = Math.floor(Math.random() * 7);

    traffic.push({ "img": carImg[randCar], "x": randLane, "y": -600, "w": width[randCar], "h": height[randCar], "speed": 8})
}

function addCoin() {
    const lanes = [273, 403, 537];

    const randLane = lanes[(Math.floor(Math.random() * 4))]

    coins.push({ "img": coinImg[0], "x": randLane, "y": -600, "w": 30, "h": 30, "speed": 4 })
}

function addLife() {
    const lanes = [273, 403, 537];

    const randLane = lanes[(Math.floor(Math.random() * 4))]

    hearts.push({ "img": coinImg[2], "x": randLane, "y": -600, "w": 30, "h": 30, "speed": 5 })
}

setInterval(addCar, 800);
setInterval(addCoin, 1500);  
setInterval(addLife, 20000);

function renderTraffic() {

   if(traffic){ for (let i = 0; i < traffic.length; i++) {
        ctx.drawImage(traffic[i].img, traffic[i].x, traffic[i].y += traffic[i].speed, traffic[i].w, traffic[i].h)
        if(traffic[i].y >=620){
            traffic.splice(i, 1);
        }
    }}
}

function renderCoins() {
    if (coins) {
        for (let i = 0; i < coins.length; i++) {
            ctx.drawImage(coins[i].img, coins[i].x, coins[i].y += coins[i].speed, coins[i].w, coins[i].h)
            if (coins[i].y >= 620) {
                coins.splice(i, 1);
            }
        }
    }
}
function renderLives() {
    for (let i = 0; i < hearts.length; i++) {
        ctx.drawImage(hearts[i].img, hearts[i].x, hearts[i].y += hearts[i].speed, hearts[i].w, hearts[i].h)
        if (hearts[i].y >= 620) {
            hearts.splice(i, 1);
        }
    }

}


function hitDetect() {
    for (let i = 0; i < traffic.length; i++) {
        let e = traffic[i];
        if (carX + carWidth > e.x && carX < e.x + e.w && carY > e.y && carY < e.y + e.h) {
            traffic.splice(i, 1);
            lives -= 1;
        }
    }
    for (let i = 0; i < coins.length; i++) {
        let f = coins[i];
        if (carX + carWidth >= f.x && carX <= f.x + f.w && carY >= f.y && carY <= f.y + f.h) {
            coins.splice(i, 1);
            score += 100;
        }
    }
    for (let i = 0; i < hearts.length; i++) {
        let g = hearts[i];
        if (carX + carWidth >= g.x && carX <= g.x + g.w && carY >= g.y && carY <= g.y + g.h) {
            hearts.splice(i, 1);
            lives += 1;
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
    const img = new Image();
    img.src = "src/images/white_gt3.png";
    ctx.drawImage(img, carX, carY, carWidth, carHeight);
}

function drawScore() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
}

function drawLives() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: " + lives, canvas.width -120, 20);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawcar();
    drawScore();
    drawLives();
    hitDetect();
    
    if(lives>=1){
        renderTraffic()
        renderCoins()
        renderLives()
    }

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

    if(lives<=0){
        lost();
    }
}

function lost(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    traffic = [];
    coins = [];
    hearts = [];
    location.reload();
}
function play(){
    lives =3;
    draw();
}
window.onload = function(){
    document.getElementById("play-btn").addEventListener("click", play);
    document.getElementById("play-again-btn").addEventListener("click", play);

}


