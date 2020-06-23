const CONSTANTS = {
    TERMINAL_VEL: 12,
    CAR_WIDTH: 92,
    CAR_HEIGHT: 180,
    SLOWDOWN: 0.5,
    SPEED: 8
};

export default class Car {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.vel = 0;
        this.x = 400;
        this.y = 400;
    }

    animate(ctx) {
        this.move();
        this.drawCar(ctx); 
    }

    drawCar(ctx) {
            var img = new Image();
            img.src = "src/murci_sv.png";
            img.onload = function (e) {
                ctx.drawImage(img, this.x, this.y, CONSTANTS.CAR_WIDTH, CONSTANTS.CAR_HEIGHT);
            }
    }

    accelerate(){
        this.vel = -1 * CONSTANTS.SPEED;
    }

    move(){
        
        this.y += this.vel;

        this.vel += CONSTANTS.SLOWDOWN;

        if (Math.abs(this.vel) > CONSTANTS.TERMINAL_VEL) {
            if (this.vel > 0) {
                this.vel = CONSTANTS.TERMINAL_VEL;
            } else {
                this.vel = CONSTANTS.TERMINAL_VEL * -1;
            }
        }

    }
}