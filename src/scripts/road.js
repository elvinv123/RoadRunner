export default class Road{
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        

    }

    animate() {
        this.drawBackground(this.ctx);
        // this.movePipes();
        // this.drawPipes(ctx);
    }

    drawBackground(ctx) {
        
        
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);

        var img = new Image(); 
        img.src = "src/road.png";
        
        var imgHeight = 0;
        var scrollSpeed = 10; 
       


        const loop = () => {
            // draw image 1 
            
            ctx.drawImage(img, 0, imgHeight);

            // draw image 2 
            
            ctx.drawImage(img, 0, imgHeight - this.dimensions.height);

            // update image height 
            imgHeight += scrollSpeed;

            // reseting the images when the first image entirely exits the screen 
            if (imgHeight == this.dimensions.height)
                imgHeight = 0;

            // this function creates a 60fps animation by scheduling a 
            // loop function call before the 
            // next redraw every time it is called 
            window.requestAnimationFrame(loop);
        }

        // this initiates the animation by calling the loop function 
        // for the first time 
        loop();

    }
}