let checkpoints = [];

class CheckPoint {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = "#260099AA";
        this.selectedColor = "#6f9dd9AA";
        this.uColor = "yellow";
        this.selected = false;

        checkpoints.push(this);
    }

    draw() {
        ctx.fillStyle = this.selected ? this.selectedColor : this.color;
        ctx.fillRect(this.x - this.width*0.35, this.y - this.height/2, this.width * 0.7, this.height);
        ctx.fillStyle = this.uColor;
        ctx.fillRect(this.x - this.width*0.5, this.y - this.height/2, this.width, this.height*0.1);
        ctx.fillRect(this.x - this.width*0.5, this.y + this.height*0.4, this.width, this.height*0.1);
    }
}