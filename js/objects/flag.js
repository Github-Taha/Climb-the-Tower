class Flag {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.active = false;
    }
    draw () {
        ctx.fillStyle = this.active ? "green" : "rgb(0, 50, 0)";
        ctx.fillRect(this.x + this.size/2, this.y - this.size, this.size/10, this.size*2);
        ctx.fillRect(this.x - this.size/2, this.y - this.size, this.size, this.size);
    }
    checkCollision () {
        if (
            (
                player.x + player.width/2  > this.x - this.size/2 &&
                player.x - player.width/2  < this.x + this.size/2 &&
                player.y + player.height/2 > this.y - this.size   &&
                player.y - player.height/2 < this.y
            ) ||
            (
                player.x + player.width/2  > this.x + this.size &&
                player.x - player.width/2  < this.x + this.size + this.size/10 &&
                player.y + player.height/2 > this.y - this.size &&
                player.y - player.height/2 < this.y + this.size
            )
        )
        {
            return true;
        }
    }
}