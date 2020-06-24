const CONSTANTS = {
    TERMINAL_VEL: 12,
    CAR_WIDTH: 92,
    CAR_HEIGHT: 180,
    SLOWDOWN: .4,
    SPEED: 10
};

export default class Car {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.vel = 0;
        this.x = this.dimensions.width / 2;
        this.y = this.dimensions.height / 2;
    }

    animate(ctx) {
        this.move();
        this.drawCar(ctx); 
    }

    drawCar(ctx) {
        
        const posX =this.x;
        const posY = this.y;
            var img = new Image();
            img.src = "src/images/murci_sv.png";
            img.onload = function (e) {
                ctx.drawImage(img, 0, 0, 646, 1339, posX, posY, CONSTANTS.CAR_WIDTH, CONSTANTS.CAR_HEIGHT);
            }
    }

    accelerate(){
        this.vel = -1 * CONSTANTS.SPEED;
    }

    move(){
        
        this.y += this.vel;

        this.vel += CONSTANTS.SLOWDOWN;
    }

    bounds() {
        return {
            left: this.x,
            right: this.x + CONSTANTS.CAR_WIDTH,
            top: this.y,
            bottom: this.y + CONSTANTS.CAR_HEIGHT
        };
    }

    outOfBounds() {
        const aboveTheTop = this.y < 0;
        const belowTheBottom = this.y + CONSTANTS.CAR_HEIGHT > this.dimensions.height;
        return aboveTheTop || belowTheBottom;
    }
}



// const MovingObject = require("./moving_object");
// const Util = require("./util");

// function randomColor() {
//     const hexDigits = "0123456789ABCDEF";

//     let color = "#";
//     for (let i = 0; i < 3; i++) {
//         color += hexDigits[Math.floor((Math.random() * 16))];
//     }

//     return color;
// }

// function Car(options) {
//     options.radius = Car.RADIUS;
//     options.vel = options.vel || [0, 0];
//     options.color = options.color || randomColor();

//     MovingObject.call(this, options);
// }

// Car.RADIUS = 15;

// Car.prototype.power = function power(impulse) {
//     this.vel[0] += impulse[0];
//     this.vel[1] += impulse[1];
// };

// Car.prototype.relocate = function relocate() {
//     this.pos = this.game.randomPosition();
//     this.vel = [0, 0];
// };

// module.exports = Car;
