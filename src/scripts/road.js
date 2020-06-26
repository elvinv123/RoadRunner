export default class Road{
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
    }

    animate() {
        this.drawBackground(this.ctx);
    }

    drawBackground(ctx) {
        
        
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);

        var img = new Image(); 
        img.src = "src/images/road.png";
        
        var imgHeight = 0;
       


        const loop = () => {
            
            ctx.drawImage(img, 0, imgHeight);

            
            ctx.drawImage(img, 0, imgHeight - this.dimensions.height);

            imgHeight += 20;

            if (imgHeight == this.dimensions.height)
                imgHeight = 0;

    
            window.requestAnimationFrame(loop);
        }
        loop();

    }
}