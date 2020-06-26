export default class Level {
    constructor(dimensions) {
        this.dimensions = dimensions;

        this.traffic = [];
        this.coins = [];
        this.hearts = [];
    }

    addCar() {
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


        const lanes = [200, 320, 450, 580];
        const width = [70, 85, 110, 110, 110, 85];
        const height = [140, 160, 220, 220, 220, 160];

        var randLane = lanes[(Math.floor(Math.random() * 4))]
        var randCar = Math.floor(Math.random() * 6);

        this.traffic.push({ "img": carImg[randCar], "x": randLane, "y": -600, "w": width[randCar], "h": height[randCar], "speed": 8})
    }

    addCoin() {
        const coinImg = new Array();
        coinImg[0] = new Image();
        coinImg[0].src = 'src/images/Gold_21.png';

        const lanes = [273, 403, 537];

        var randLane = lanes[(Math.floor(Math.random() * 4))]

        this.coins.push({ "img": coinImg[0], "x": randLane, "y": -600, "w": 30, "h": 30, "speed": 4 })
    }

    addLife() {
        const coinImg = new Array();
        coinImg[0] = new Image();
        coinImg[0].src = 'src/images/Gold_21.png';
        coinImg[1] = new Image();
        coinImg[1].src = 'src/images/Silver_21.png';
        coinImg[2] = new Image();
        coinImg[2].src = 'src/images/Bronze_21.png';

        const lanes = [273, 403, 537];

        var randLane = lanes[(Math.floor(Math.random() * 4))]

        this.hearts.push({ "img": coinImg[2], "x": randLane, "y": -600, "w": 30, "h": 30, "speed": 5 })
    }

    renderTraffic(ctx) {

    if(this.traffic){ for (var i = 0; i < this.traffic.length; i++) {
            ctx.drawImage(this.traffic[i].img, this.traffic[i].x, this.traffic[i].y += this.traffic[i].speed, this.traffic[i].w, this.traffic[i].h)
            if(this.traffic[i].y >=620){
                this.traffic.splice(i, 1);
            }
        }}
    }

    renderCoins(ctx) {
        if (this.coins) {
            for (var i = 0; i < this.coins.length; i++) {
                ctx.drawImage(this.coins[i].img, this.coins[i].x, this.coins[i].y += this.coins[i].speed, this.coins[i].w, this.coins[i].h)
                if (this.coins[i].y >= 620) {
                    this.coins.splice(i, 1);
                }
            }
        }
    }
    renderLives(ctx) {
        for (var i = 0; i < this.hearts.length; i++) {
            ctx.drawImage(this.hearts[i].img, this.hearts[i].x, this.hearts[i].y += this.hearts[i].speed, this.hearts[i].w, this.hearts[i].h)
            if (this.hearts[i].y >= 620) {
                this.hearts.splice(i, 1);
            }
        }

    }


    animate(ctx) {
        
        this.renderLives(ctx);
        this.renderCoins(ctx);
        this.renderTraffic(ctx);
        this.drawBackground(ctx);
    }

    drawBackground(ctx) {
        ctx.fillStyle = "transparent";
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    }
}