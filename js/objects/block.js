let blocks = [];

class Block {
    constructor (x, y, width, height, type = "block") {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.type = type;
        switch (this.type) {
            case "block":
                this.color = "rgb(175, 175, 175)";
                break;
            case "jump":
                this.color = "yellow";
                break;
            case "lava":
                this.color = "red";
                break;
            case "ice":
                this.color = "#739bd0";
                break;
            case "gravityup":
                this.color = "#0e9c06"
                break;
            case "gravitydown":
                this.color = "#20691c";
                break;
            case "breakable":
                this.color = "#f051d0";
                break;
            case "bouncy":
                this.color = "#8f9c05";
                break;
            case "vanish":
                this.color = "#ab0947";
                break;
        }

        this.movement = {
            start: {
                x: 0,
                y: 0
            },
            end: {
                x: 0,
                y: 0
            },
            speed: 0,
            isMoving: false
        };

        if (this.movement.isMoving) {
            this.x = this.movement.start.x;
            this.y = this.movement.start.y;
        }

        this.breakableCollide = false;
        this.vanished = false;

        blocks.push(this);
    }

    setMovement (movement) {
        this.movement = movement;
        let diff = {
            x: this.movement.end.x - this.movement.start.x,
            y: this.movement.end.y - this.movement.start.y
        };
        diff.mag = Math.hypot(diff.x, diff.y);
        this.movement.vel = {
            x: (diff.mag != 0 ? diff.x / diff.mag: 0) * this.movement.speed,
            y: (diff.mag != 0 ? diff.y / diff.mag: 0) * this.movement.speed
        };
    }

    draw () {
        if (!this.vanished) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x - this.width/2, this.y - this.height/2, this.width, this.height);
        }
    }

    update () {
        if (this.movement.isMoving) {
            this.x += this.movement.vel.x;
            this.y += this.movement.vel.y;

            let reverseX = false;
            let reverseY = false;

            if (this.movement.end.x - this.movement.start.x < 0)
                reverseX = true;
            if (this.movement.end.y - this.movement.start.y < 0)
                reverseY = true;

            let pastX = false;
            let pastY = false;
            
            let beforeX = false;
            let beforeY = false;

            if (!reverseX) {
                if (this.x >= this.movement.end.x) pastX = true;
                if (this.x <= this.movement.start.x) beforeX = true;
            }
            else {
                if (this.x <= this.movement.end.x) pastX = true;
                if (this.x >= this.movement.start.x) beforeX = true;
            }
            if (!reverseY) {
                if (this.y >= this.movement.end.y) pastY = true;
                if (this.y <= this.movement.start.y) beforeY = true;
            }
            else {
                if (this.y <= this.movement.end.y) pastY = true;
                if (this.y >= this.movement.start.y) beforeY = true;
            }

            if (
                (pastX && pastY) ||
                (beforeX && beforeY)
            )
            {
                this.movement.vel.x *= -1;
                this.movement.vel.y *= -1;
            }
        }
    }
}

/*
Currently Implemented Blocks
    Normal Block
    Lava Block
    Jump Block
    Gravity Block
    Ice Block
    Breakable Block
    Bouncy Block
    Vanishing Block
    Checkpoint Block
    
Can Implement
    Laser Block
    Magnet Block
    Fan Block
    Switch Block
    Sticky Block
*/
