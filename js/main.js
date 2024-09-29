const canvas = document.getElementById("canvas");
canvas.clientWidth = parseFloat(getComputedStyle(canvas).getPropertyValue("width"));
canvas.clientHeight = parseFloat(getComputedStyle(canvas).getPropertyValue("height"));
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
const ctx = canvas.getContext('2d');

let player,
    flag,
    currentPoints,
    currentCheckPoint,
    currentLevel = 0,
    won = false,
    start,
    timeStart = false,
    frames = 0,
    pause = false,
    time = 0;

let mouse = {
    x: 0,
    y: 0,
}

let screenPos = {
    x: 0,
    y: 0,
    velX: 0,
    velY: 0,
};

function init() {
    blocks = [];
    points = [];
    projectiles = [];
    shooters = [];
    checkpoints = [];
    won = false;
    start = Date.now();
    timeStart = false;
    musicPlay = true;
    frames = 0;
    pause = false;
    time = 0;

    canvas.clientWidth = parseFloat(getComputedStyle(canvas).getPropertyValue("width"));
    canvas.clientHeight = parseFloat(getComputedStyle(canvas).getPropertyValue("height"));
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    screenPos = {
        x: 0,
        y: 0,
        velX: 0,
        velY: 0,
    };
    
    levels[currentLevel].init();

    levels[currentLevel].totalPoints = points.length;

    window.requestAnimationFrame(animate);
}

function animate(elapsedTime) {
    output("");
    draw(elapsedTime);
    update(elapsedTime);

    if (won) {
        window.setTimeout(
            () => {
                setScreen("endScreen");
            },
            1000
        )
    }
    else if (!pause) {
        window.requestAnimationFrame(animate);
    }

    frames ++;
}

function draw(elapsedTime) {
    ctx.fillStyle = "rgb(50, 50, 50)";
    ctx.fillRect(screenPos.x, screenPos.y, canvas.clientWidth, canvas.clientHeight);

    points.forEach(point => {
        point.draw(elapsedTime);
    });

    blocks.forEach(block => {
        block.draw();
    });
    player.draw();

    flag.draw();

    projectiles.forEach(proj => {
        proj.draw();
    });
    
    shooters.forEach(shooter => {
        shooter.draw();
    });
    
    checkpoints.forEach(cp => {
        cp.draw();
    });

}

function update(elapsedTime) {
    shooters.forEach((shooter) => {
        if (shooter.playerShoot) {
            shooter.canSeePlayer() && shooter.faceToPlayer();
        }
    });
    
    if (currentPoints == levels[currentLevel].totalPoints) {
        flag.active = true;
    }
    
    blocks.forEach(block => {
        block.update();
    });
    
    points.forEach(point => {
        point.checkCollision();
    });
    
    projectiles.forEach(projectile => {
        projectile.update();
        projectile.collide();
    });
    
    if (flag.checkCollision() && flag.active) {
        winSound();
        backgroundmusic.pause();
        backgroundmusic.currentTime = 0;
        musicPlay = false;
        won = true;
    }

    if (frames % 2 == 0) {
        for (let i = playerPos.length - 1; i > 0; i--) {
            playerPos[i] = {
                x: playerPos[i - 1].x,
                y: playerPos[i - 1].y
            }
        }

        playerPos[0] = {
            x: player.x,
            y: player.y
        };
    }
    
    outputplus(frames + "\n")
    
    player.keyControl();
    player.update();
    player.collide();
    
    screenPos.velX = -(player.x - (screenPos.x + canvas.clientWidth/2)) / 10;
    screenPos.velY = -(player.y - (screenPos.y + canvas.clientHeight/2)) / 10;

    if (!timeStart) {
        start = Date.now();
    }

    time = Date.now() - start;

    ctx.fillStyle = "white";
    ctx.font = "15px monospace";
    ctx.fillText(getCurrentTime(time), screenPos.x + 10, screenPos.y + 20);
    document.querySelector("#endScreen #time").innerText = getCurrentTime(time);

    let cpstring = currentPoints < 10 ? "  " + currentPoints : (currentPoints < 100 ? " " + currentPoints : currentPoints);
    ctx.fillText(cpstring + "/" + points.length, screenPos.x + canvas.width - 70, screenPos.y + 20);

    outputplus((player.x) + "\n" + (player.y));
    
    screenPos.x -= screenPos.velX;
    screenPos.y -= screenPos.velY;

    
    ctx.translate(
        screenPos.velX,
        screenPos.velY
    );

    outputplus("\n" + blocks.length);
}

window.setInterval(
    () => {
        shooters.forEach(shooter => {
            if (shooter.canSeePlayer()) {
                if (shooter.radiusShoot) {
                    if (shooter.distToPlayer() < shooter.maxDist)
                        shooter.shoot();
                }
                else 
                    shooter.shoot();
            }
        });
    },
    1000
);

window.setInterval(
    () => {
        blocks.forEach(block => {
            if (block.type == "vanish") {
                block.vanished = !block.vanished;
            }
        });
    },
    1500
);

window.addEventListener("mousemove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
}) ;

function output(text) {
    // document.getElementById("console").innerText = text;
}
function outputplus(text) {
    // document.getElementById("console").innerText += text;
}
