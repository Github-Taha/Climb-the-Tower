const keys = {
    left: false,
    right: false,
    jump: false,
};

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case " ":
        case "w":
        case "ArrowUp":
            keys.jump = true;
            break;
        case "d":
        case "ArrowRight":
            keys.right = true;
            break;
        case "a":
        case "ArrowLeft":
            keys.left = true;
            break;
        case "r":
            restartPlayer();
            break;
        case "R":
            blocks = [];
            points = [];
            projectiles = [];
            shooters = [];
            checkpoints = [];
            won = false;
            start = Date.now();
            timeStart = false;

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
            break;
        case "p":
            pause = true;
            setScreen("pauseScreen");
            break;
    }
});

window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "d":
        case "ArrowRight":
            keys.right = false;
            break;
        case "a":
        case "ArrowLeft":
            keys.left = false;
            break;
    }
});