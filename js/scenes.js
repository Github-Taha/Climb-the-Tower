const startScreen = document.getElementById("startScreen");
const endScreen = document.getElementById("endScreen");
const levelScreen = document.getElementById("levelScreen");
const howtoScreen = document.getElementById("howtoScreen");
const pauseScreen = document.getElementById("pauseScreen");
const creditScreen = document.getElementById("creditScreen");

window.onload = () => {
    setScreen("startScreen");
}

function setScreen(screen) {
    startScreen.style.display = "none";
    endScreen.style.display = "none";
    levelScreen.style.display = "none";
    howtoScreen.style.display = "none";
    pauseScreen.style.display = "none";
    creditScreen.style.display = "none";
    canvas.style.display = "none";
    switch (screen) {
        case "startScreen":
            startScreen.style.display = "flex";
            break;
        case "endScreen":
            endScreen.style.display = "flex";
            break;
        case "levelScreen":
            levelScreen.style.display = "flex";
            break;
        case "howtoScreen":
            howtoScreen.style.display = "flex";
            break;
        case "pauseScreen":
            pauseScreen.style.display = "flex";
            break;
        case "creditScreen":
            creditScreen.style.display = "flex";
        case "canvas":
            canvas.style.display = "flex";
            break;
    }
}


document.querySelector("#startScreen #startbutton").addEventListener(
    "click", 
    () => {
        setScreen("levelScreen");
    }
);

document
    .querySelectorAll(".back")
    .forEach((backButton) => {
        backButton
            .addEventListener(
                "click",
                () => {
                    setScreen("startScreen");
                }
            );
    });

    document
    .querySelector("#startScreen #howtobutton").
    addEventListener(
        "click",
        () => {
            setScreen("howtoScreen")
        }
    );

document
    .querySelector("#startScreen #creditbutton")
    .addEventListener(
        "click",
        () => {
            setScreen("creditScreen");
        }
    );

document
    .querySelector("#levelScreen #level1").
    addEventListener(
        "click",
        () => {
            currentLevel = 0;
            setScreen("canvas");
            init();
        }
    );

// Still Being Made
/*
document
    .querySelector("#levelScreen #level2").
    addEventListener(
        "click",
        () => {
            currentLevel = 1;
            setScreen("canvas");
            init();
        }
    );

document
    .querySelector("#levelScreen #level3").
    addEventListener(
        "click",
        () => {
            currentLevel = 2;
            setScreen("canvas");
            init();
        }
    );
*/

document
    .querySelector("#endScreen #restartbutton")
    .addEventListener(
        "click",
        () => {
            setScreen("canvas");
            init();
        }
    );

document
    .querySelector("#endScreen #nextbutton")
    .addEventListener(
        "click",
        () => {
            if (currentLevel != 0) {
                currentLevel ++;
                setScreen("canvas");
                init();
            }
        }
    );
    
document
    .querySelector("#endScreen #menubutton")
    .addEventListener(
        "click",
        () => {
            setScreen("levelScreen");
        }
    );

document
    .querySelector("#pauseScreen #main")
    .addEventListener(
        "click",
        () => {
            setScreen("startScreen");
        }
    );

document
    .querySelector("#pauseScreen #restart")
    .addEventListener(
        "click",
        () => {
            setScreen("canvas");
            init();
        }
    );

document
    .querySelector("#pauseScreen #continue")
    .addEventListener(
        "click",
        () => {
            pause = false;
            setScreen("canvas");
            start = Date.now() - time;
            requestAnimationFrame(animate);
        }
    );
