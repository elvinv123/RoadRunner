import Level from "./level"
import Car from "./car"

export default class RoadRunner {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.restart();
        this.dx = 2;
        this.dy = -2;
        this.score = 0;
        this.lives = 3;
    }

    restart() {
        this.running = true;
        this.car = new Car(this.dimensions, this.ctx);
        this.level = new Level(this.dimensions);
        this.animate();
    }

   animate(){
       this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);
        this.level.animate(this.ctx);
        this.car.animate(this.ctx);
       
        if(this.running){
          requestAnimationFrame(this.animate.bind(this))  ;
          
        } 
   }


//    play(){
//        this.running = true;
//        this.animate();    
//    }


 
}
