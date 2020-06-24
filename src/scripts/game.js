import Level from "./level"
import Car from "./car"

export default class RoadRunner {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.restart();
        this.registerEvents();
    }

    restart() {
        this.running = false;
        this.car = new Car(this.dimensions);
        this.level = new Level(this.dimensions);
        this.animate();
    }

   animate(){
       this.level.animate(this.ctx);
        this.car.animate(this.ctx);
       
        if(this.running){
          requestAnimationFrame(this.animate.bind(this))  ;
          
        } 
   }

    registerEvents() {
        this.boundClickHandler = this.control.bind(this);
        this.ctx.canvas.addEventListener("mousedown", this.boundClickHandler);
    }

   control(e){
       if (!this.running) {
           this.play();
       }
       this.car.accelerate(this.ctx); 
   }

   play(){
       this.running = true;
       this.animate();    
        

   }


 
}

// const Car = require("./car");

// function Game() {
//     this.cars = [];

//     this.addCar();
// }

// Game.DIM_X = 1000;
// Game.DIM_Y = 600;
// Game.FPS = 32;
// Game.BG_COLOR = "transparent";

// Game.prototype.add = function add(object) {
//     if (object instanceof Car) {
//         this.cars.push(object);
//     } else {
//         throw new Error("unknown type of object");
//     }
// };

// Game.prototype.addCar = function addShip() {
//     const car = new Car({
//         pos: this.randomPosition(),
//         game: this
//     });

//     this.add(car);

//     return car;
// };

// Game.prototype.allObjects = function allObjects() {
//     return [].concat(this.cars);
// };

// Game.prototype.draw = function draw(ctx) {
//     ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
//     ctx.fillStyle = Game.BG_COLOR;
//     ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

//     this.allObjects().forEach(function (object) {
//         object.draw(ctx);
//     });
// };

// Game.prototype.moveObjects = function moveObjects(delta) {
//     this.allObjects().forEach(function (object) {
//         object.move(delta);
//     });
// };

// Game.prototype.randomPosition = function randomPosition() {
//     return [
//         Game.DIM_X * Math.random(),
//         Game.DIM_Y * Math.random()
//     ];
// };


// module.exports = Game;
