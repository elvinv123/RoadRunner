

export default class Car {
    constructor(dimensions, ctx) {
        this.dimensions = dimensions;
        this.ctx = ctx;

        this.carHeight = 180;
        this.carWidth = 92;
        this.carX = (this.dimensions.width - this.carWidth) / 2;
        this.carY = (this.dimensions.width - this.carWidth) / 2;
        this.x = this.dimensions.width / 2;
        this.y = this.dimensions.height - 30;
        this.dx = 2;
        this.dy = -2;
        this.registerEvents();

        this.rightPressed = false;
        this.leftPressed = false;
        this.upPressed = false;
        this.downPressed = false;
    }

    
    animate(ctx) {
        this.drawCar(ctx); 
        this.move();
    }

    drawCar(ctx) {
        
        const img = new Image();
        img.src = "src/images/murci_sv.png";
        
        ctx.drawImage(img, 0, 0, 646, 1339, this.carX, this.carY, this.carWidth, this.carHeight);
    }

    registerEvents() {
        

            document.addEventListener("keydown", this.keyDownHandler, false);
            document.addEventListener("keyup", this.keyUpHandler, false);
    }

    keyUpHandler(e) {
        
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.rightPressed = false;
            
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.leftPressed = false;
        }
        else if (e.key == "Up" || e.key == "ArrowUp") {
            this.upPressed = false;
        }
        else if (e.key == "Down" || e.key == "ArrowDown") {
            this.downPressed = false;
        }
    }

    keyDownHandler(e) {
        
        if (e.key == "Right" || e.key == "ArrowRight") {
            this.rightPressed = true;
            console.log("rightPressed", this.rightPressed)
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            this.leftPressed = true;
            console.log("leftPressed")
        }
        else if (e.key == "Up" || e.key == "ArrowUp") {
            this.upPressed = true;
        }
        else if (e.key == "Down" || e.key == "ArrowDown") {
            this.downPressed = true;
        }
    }

    move(){
        debugger
        if (this.rightPressed && this.carX < this.dimensions.width - this.carWidth) {
            this.carX += 7;
            debugger
        }
        else if (this.leftPressed && this.carX > 0) {
            this.carX -= 7;
        }
        else if (this.upPressed && this.carY > 0) {
            this.carY -= 7;
        }
        else if (this.downPressed && this.carY > 0) {
            this.carY += 7;
        }

        // this.x += this.dx;
        // this.y += this.dy;
    
    }

 

 
}



