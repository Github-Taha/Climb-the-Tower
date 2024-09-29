let points = [];

class Point {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.r = size;
        this.acheived = false;

        // this.delayWave = Math.random() * Math.PI * 2;

        points.push(this);
    }
    draw (elapsedTime) {
        if (!this.acheived) {
            ctx.fillStyle = "orange";
            ctx.beginPath();
            ctx.arc(this.x, this.y + Math.sin(elapsedTime / 200 + (this.delayWave || 0)) * 5, this.r, 0, Math.PI*2);
            ctx.fill();
            ctx.closePath();
        }
    }
    checkCollision () {
        if (circleRectCollision(player, this) && !this.acheived) {
            this.acheived = true;
            pointBeep();
            currentPoints ++;
        }
    }
}
