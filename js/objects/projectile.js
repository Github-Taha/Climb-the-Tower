let projectiles = [];

class Projectile {
    constructor(x, y, velX, velY, r) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.r = r;
        this.color = "red";

        projectiles.push(this);
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();
    }
    update() {
        this.x += this.velX;
        this.y += this.velY;
    }
    collide () {
        blocks.forEach(block => {
            if (circleRectCollision(block, this)) {
                projectiles.splice(projectiles.indexOf(this), 1);
            }
        });
        if (circleRectCollision(player, this)) {
            restartPlayer();
            projectiles.splice(projectiles.indexOf(this), 1);
        }
    }
}