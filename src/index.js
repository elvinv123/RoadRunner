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


var traffic = [ ];

const carImg= new Array();
carImg[0] = new Image();
carImg[0].src = 'src/images/Muscle.png';
carImg[1] = new Image();
carImg[1].src = 'src/images/Sports.png';
carImg[2] = new Image();
carImg[2].src = 'src/images/Mini_van.png';
carImg[3] = new Image();
carImg[3].src = 'src/images/Mini_truck.png';
carImg[4] = new Image();
carImg[4].src = 'src/images/Ambulance.png';
carImg[5] = new Image();
carImg[5].src = 'src/images/taxi.png';
carImg[6] = new Image();
carImg[6].src = 'src/images/Black_viper.png';




function addCar() {
    const lanes = [200, 320, 450, 580];
    const width = [70, 85, 110, 110, 110, 85];
    const height = [140, 160, 220, 220, 220, 160];
    
    var randLane = lanes[(Math.floor(Math.random() * 4))]
    var randCar = Math.floor(Math.random() * 6);

    traffic.push({ "img": carImg[randCar], "x": randLane, "y": -600, "w": width[randCar], "h": height[randCar], "speed": 4})
}

setInterval(addCar, 1500);  
function renderTraffic() {
    
    
   if(traffic){ for (var i = 0; i < traffic.length; i++) {
        ctx.drawImage(traffic[i].img, traffic[i].x, traffic[i].y += traffic[i].speed, traffic[i].w, traffic[i].h)
        if(traffic[i].y >=620){
            traffic.splice(i, 1);
        }
       
    }}
}

function hitDetect() {
    for (var i = 0; i < traffic.length; i++) {
        var e = traffic[i];
        if (carX + carWidth >= e.x && carX <= e.x + e.w && carY >= e.y && carY <= e.y + e.h) {
            traffic.splice(i, 1);
            lives -= 1;
        }
        // if (carX + carWidth >= e.x && carX <= e.x + e.w && carY >= e.y && carY <= e.y + e.h) {
        //     traffic.splice(i, 1);
        //     lives -= 1;
        // }
    }
}

function addScore(){
    const interval = setInterval(()=> score+= 1, 1000 )
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
    var img = new Image();
    img.src = "src/images/murci_sv.png";
    ctx.drawImage(img, 0, 0, 646, 1339, carX, carY, carWidth, carHeight);

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
    
    if(lives!==0){
        addScore(); 
        renderTraffic()
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
}

draw();
