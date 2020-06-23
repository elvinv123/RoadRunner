import Road from "./road"
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
        // this.road = new Road(this.dimensions);

        this.animate();
    }

   animate(){
        this.car.animate(this.ctx);
        // this.road.animate(this.ctx);

        if(this.running){
          requestAnimationFrame(this.animate.bind(this))  
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
       this.car.accelerate();
   }

   play(){
       this.running = true;
       this.animate();
   }


 
}
