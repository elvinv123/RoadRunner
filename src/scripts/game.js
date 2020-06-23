import Road from "./road"
import Car from "./car"

export default class RoadRunner {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.restart();
    }

    restart() {
        this.running = false;
        this.car = new Car(this.dimensions);
        this.animate();
    }

   animate(){
        this.car.animate(this.ctx);

        if(this.running){
          requestAnimationFrame(this.animate.bind(this))  
        } 
   }


   control(e){
       if (!this.running) {
           this.play();
       }
       this.car.accelerate();
   }

   play(){
       this.running = true;
       this.animate();
   }


 
}
