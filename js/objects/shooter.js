let shooters = [];

class Shooter {
	constructor(x, y, width, height, angle) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.angle = angle;
		this.angleVel = 0;

		this.color = "purple";
		this.bgcolor = "rgb(100, 100, 100)";
		this.radiusShoot = false;
		this.playerShoot = false;
		this.maxDist = 250;

		shooters.push(this);
	}

	draw() {
		let topLeft = {
			x: -this.width/2,
			y: - this.height/2
		};
		let topRight = {
			x: this.width/2,
			y: -this.height/2
		};
		let bottomLeft = {
			x: -this.width/2,
			y: this.height/2
		};
		let bottomRight = {
			x: this.width/2,
			y: this.height/2
		};

		topLeft = rotateVector(topLeft, this.angle);
		topRight = rotateVector(topRight, this.angle);
		bottomLeft = rotateVector(bottomLeft, this.angle);
		bottomRight = rotateVector(bottomRight, this.angle);

		let size = this.width > this.height ? this.width * 1.2 : this.height * 1.2;

		ctx.fillStyle = this.bgcolor;
		ctx.fillRect(
			this.x - size/2,
			this.y - size/2,
			size,
			size,
		);
		ctx.fillStyle = this.color;
		drawQuad(
			ctx,
			topLeft.x + this.x, topLeft.y + this.y,
			topRight.x + this.x, topRight.y + this.y,
			bottomRight.x + this.x, bottomRight.y + this.y,
			bottomLeft.x + this.x, bottomLeft.y + this.y,
		);
	}

	shoot() {
		new Projectile(this.x, this.y, Math.sin(-this.angle) * 5, Math.cos(-this.angle) * 5, 5);
	}

	faceToPlayer () {
		let angle = Math.atan2(this.y - player.y, this.x - player.x) + Math.PI/2;
		this.angleVel = (angle - this.angle) / 10;
		let angleDiff = angle - this.angle;
		if (Math.abs(angleDiff) > Math.PI && ((this.angle < 0 && angle > 0) || (this.angle > 0 && angle < 0))) {
			let diff1;
			let diff2;
			if (this.angle > 0) {
				diff1 = (3 * Math.PI) / 2 - this.angle;
				diff2 = Math.PI / 2 - Math.abs(angle)
				this.angleVel = (diff1 + diff2) / 10
			}
			else {
				diff1 = Math.PI / 2 - Math.abs(this.angle);
				diff2 = (3 * Math.PI) / 2 - angle;
				this.angleVel = (diff1 + diff2) / -10
			}
		}
		this.angle += this.angleVel;
	}

	canSeePlayer () {
		let dist = 0;
		let newX = player.x - this.x;
		let newY = player.y - this.y;
		let mag = Math.hypot(newX, newY);
		let dot = {
			x: this.x,
			y: this.y,
			velX: (mag != 0 ? newX / mag : 0) * 2,
			velY: (mag != 0 ? newY / mag : 0) * 2,
			r: 5,
		};

		let touchingBlock = false;
		let touchingPlayer = false;

		while(dist < this.maxDist) {
			dot.x += dot.velX;
			dot.y += dot.velY;
			blocks.forEach(block => {
				if (circleRectCollision(block, dot)) {
					touchingBlock = true;
					return;
				}
			});
			if (touchingBlock) {
				break;
			}
			if (circleRectCollision(player, dot)) {
				touchingPlayer = true;
				break;
			}

			newX = dot.x - this.x;
			newY = dot.y - this.y;
			mag = Math.hypot(newX, newY);
			dist = mag;
		}

		return touchingPlayer;
	}

	distToPlayer () {
		return Math.hypot(this.x - player.x, this.y - player.y);
	}
}