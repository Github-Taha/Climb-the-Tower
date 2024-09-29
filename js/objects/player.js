let trailDots = 15;
let playerPos = 
	new Array(trailDots)
	.fill(
		{
			x: 0,
			y: 0
		}
	);

class Player {
	constructor (x, y, width, height, color = "rgb(109, 114, 176)") {
		this.x = x;
		this.y = y;
		this.velX = 0;
		this.velY = 0;
		this.accX = 0;
		this.accY = 0;
		this.moveSpeed = 1;

		this.width = width;
		this.height = height;
		this.color = color;
		this.jumpAccess = false;
		this.die = false;
		this.jumpAmount = 0;
		this.friction = 0.9;
		this.gravity = 0.5;
	}

	draw () {
		if (!this.die) {
			for (let i = 0; i < playerPos.length; i++) {
				ctx.fillStyle = "rgb(80, 80, 80)";
				let sideLength = (playerPos.length - i) * ((this.width - 5) / playerPos.length);
				ctx.fillRect(playerPos[i].x - sideLength/2, playerPos[i].y - sideLength/2, sideLength, sideLength);
			}

			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width/2, this.y - this.height/2, this.width, this.height);
		}
	}

	update () {
		if (!this.die) {
			this.accY = this.gravity;
			
			this.velX += this.accX;
			this.velY += this.accY;
			
			this.velX *= this.friction;
			
			this.x += this.velX;
			this.y += this.velY;

			for (let i = 0; i < playerPos.length; i++) {
				outputplus(Math.round(playerPos[i].x) + ", " + Math.round(playerPos[i].y) + "\n");
			}
		}
	}

	keyControl () {
		if (!this.die) {
			this.accX = 0;
			if (keys.right ^ keys.left) {
				if (keys.right) this.accX = this.moveSpeed;
				if (keys.left) this.accX = -this.moveSpeed;
			}
			if ((keys.jump && this.jumpAccess) || (this.jumpAmount < 2 && keys.jump)) {
				this.velY = this.gravity == 0.5 ? -8 : 8;
				this.jumpAmount ++;
				jumpBeep();
			}
			this.jumpAccess = false;
			keys.jump = false;
		}
	}

	collide () {
		this.friction = 0.9;
		this.moveSpeed = 1;
		blocks.forEach((block, index) => {
			if (
				block.x + block.width/2  > this.x - this.width/2  &&
				block.x - block.width/2  < this.x + this.width/2  &&
				block.y + block.height/2 > this.y - this.height/2 &&
				block.y - block.height/2 < this.y + this.height/2 &&
				!block.vanished
			) 
			{
				let leftB = block.x - block.width/2;
				let rightB = block.x + block.width/2;
				let topB = block.y - block.height/2;
				let bottomB = block.y + block.height/2;

				let left = this.x - this.width/2;
				let right = this.x + this.width/2;
				let top = this.y - this.height/2;
				let bottom = this.y + this.height/2;

				let min = Number.MAX_SAFE_INTEGER;

				let xDir = false;
				let yDir = false;

				min = Math.min(rightB - left, right - leftB);
				xDir = true;

				if (Math.min(bottomB - top, bottom - topB) < min) {
					min = Math.min(bottomB - top, bottom - topB);
					yDir = true;
					xDir = false;
				}

				this.jumpAccess = false;

				if (xDir) {
					if (this.x > block.x)
						this.x += min;
					else 
						this.x -= min;
				}
				else {
					if (this.y > block.y)
						this.y += min;
					else
						this.y -= min;
					if ((this.gravity > 0 ? this.y < block.y : this.y > block.y)) {
						this.jumpAccess = true;
						this.jumpAmount = 0;
					}
				}

				if (block.type != "bouncy") {
					if (xDir)
						this.velX = 0;
					else
						this.velY = 0;
				}

				if (block.type == "ice") {
					this.friction = 0.97;
					this.moveSpeed = 0.3;
				}
				else if (block.type == "jump") {
					this.velY = this.gravity > 0 ? -15 : 15;
					this.jumpAmount = 1;
					bounceSound();
				}
				else if (block.type == "lava") {
					deathSound();
					restartPlayer();
				}
				else if (block.type == "gravityup") {
					this.gravity = -0.5;
				}
				else if (block.type == "gravitydown") {
					this.gravity = 0.5;
				}
				else if (block.type == "breakable") {
					block.breakableCollide = true;
					window.setTimeout(
						() => {
							let zeInterval = window.setTimeout(
								() => {
									block.vanished = false;
								},
								1500
							);
							if (block.vanished)
								window.clearTimeout(zeInterval);
							block.vanished = true;
						},
						1000
					);
				}
				else if (block.type == "bouncy") {
					if (xDir)
						this.velX *= -0.92;
					else
						this.velY *= -0.92;
					this.jumpAmount = 1;
				}
			}
			else if (block.type == "breakable" && block.breakableCollide) {
				block.breakableCollide = false;
				let zeInterval = window.setTimeout(
					() => {
						block.vanished = false;
					},
					1500
				);
				if (block.vanished) 
					window.clearInterval(zeInterval);
				block.vanished = true;
			}
		});
		checkpoints.forEach(checkpoint => {
			if (
				checkpoint.x + checkpoint.width/2  > this.x - this.width/2  &&
				checkpoint.x - checkpoint.width/2  < this.x + this.width/2  &&
				checkpoint.y + checkpoint.height/2 > this.y - this.height/2 &&
				checkpoint.y - checkpoint.height/2 < this.y + this.height/2
			)
			{
				if (checkpoint != currentCheckPoint) {
					checkpoints.forEach(cp => {
						cp.selected = false;
					});
					checkPointBeep();
					currentCheckPoint = checkpoint;
					checkpoint.selected = true;
					return;
				}
			}
		});
		shooters.forEach(shooter => {
			let size = shooter.width > shooter.height ? shooter.width * 1.2 : shooter.height * 1.2;
			if (
				shooter.x + size/2  > this.x - this.width/2  &&
				shooter.x - size/2  < this.x + this.width/2  &&
				shooter.y + size/2 > this.y - this.height/2 &&
				shooter.y - size/2 < this.y + this.height/2
			)
			{
				let leftB = shooter.x - size/2;
				let rightB = shooter.x + size/2;
				let topB = shooter.y - size/2;
				let bottomB = shooter.y + size/2;

				let left = this.x - this.width/2;
				let right = this.x + this.width/2;
				let top = this.y - this.height/2;
				let bottom = this.y + this.height/2;

				let min = Number.MAX_SAFE_INTEGER;

				let xDir = false;
				let yDir = false;

				min = Math.min(rightB - left, right - leftB);
				xDir = true;

				if (Math.min(bottomB - top, bottom - topB) < min) {
					min = Math.min(bottomB - top, bottom - topB);
					yDir = true;
					xDir = false;
				}

				this.jumpAccess = false;

				if (xDir) {
					if (this.x > shooter.x)
						this.x += min;
					else 
						this.x -= min;
					this.velX = 0;
				}
				else {
					if (this.y > shooter.y)
						this.y += min;
					else
						this.y -= min;
					this.velY = 0;
					if ((this.gravity > 0 ? this.y < shooter.y : this.y > shooter.y)) {
						this.jumpAccess = true;
						this.jumpAmount = 0;
					}
				}
			}
		});
	}
}