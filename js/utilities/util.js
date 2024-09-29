function drawQuad(
    ctx,
    x1, y1,
    x2, y2,
    x3, y3,
    x4, y4
)
{
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.lineTo(x4, y4);
    ctx.fill();
    ctx.closePath();
}

function circleRectCollision(rect, circle) {
    let cornerDistance_sq;
    let circleDistance = {
        x: 0,
        y: 0,
    }
    circleDistance.x = Math.abs(circle.x - rect.x);
    circleDistance.y = Math.abs(circle.y - rect.y);

    if (circleDistance.x > (rect.width/2 + circle.r)) { return false; }
    if (circleDistance.y > (rect.height/2 + circle.r)) { return false; }

    if (circleDistance.x <= (rect.width/2)) { return true; } 
    if (circleDistance.y <= (rect.height/2)) { return true; }

    cornerDistance_sq = (circleDistance.x - rect.width/2)^2 +
                         (circleDistance.y - rect.height/2)^2;

    return (cornerDistance_sq <= (circle.r ** 2));
}

function rotateVector(vec, angle) {
    // x2=cosβx1−sinβy1
    // y2=sinβx1+cosβy1
    let x = Math.cos(angle) * vec.x - Math.sin(angle) * vec.y;
    let y = Math.sin(angle) * vec.x + Math.cos(angle) * vec.y;

    return {
        x: x,
        y: y
    };
}

function restartPlayer () {
    player.die = true;
    player.x = currentCheckPoint.x;
    player.y = currentCheckPoint.y;
    player.velX = 0;
    player.velY = 0;
    player.accX = 0;
    player.accY = 0;
    player.movementSpeed = 1;
    player.friction = 0.9;
    player.gravity = 0.5;
    player.jumpAmount = 0;
    playerPos = new Array(trailDots).fill({x: 0, y: 0});
    
    window.setTimeout(
        () => {
            player.die = false;
            timeStart = true;

            keys.left = false;
            keys.right = false;
            keys.jump = false;
        },
        1000
    );
}

function getCurrentTime(timel) {
    let now = timel;
    let time = now;

    let miliseconds = now % 1000;
    time = (now - (now % 1000)) / 1000;

    let timeString = "";
    if ((time - (time % 60)) / 60 < 10) timeString += "0" + ((time - (time % 60)) / 60);
    else (time - (time % 60)) / 60;
    timeString += ":";
    timeString += (time % 60) < 10 ? "0" + (time % 60) : (time % 60);
    timeString += "." + (miliseconds < 100? "0" + (miliseconds) : (miliseconds < 10 ? "00" + miliseconds : miliseconds));

    return timeString;
}