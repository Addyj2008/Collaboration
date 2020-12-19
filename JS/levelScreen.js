const LEVEL = [];
for (let loop1 in document.getElementsByClassName("level")) {
    if (isFinite(loop1 * 1)) {
        LEVEL.push(document.getElementsByClassName("level")[loop1]);
    }
}
function displayLevelScreen () {
    for (let loop1 in LEVEL) {
        document.getElementById("level-container").appendChild(LEVEL[loop1]);
    }
}
function hideLevelScreen () {
    for (let loop1 in LEVEL) {
        LEVEL[loop1].remove();
    }
}

window.requestAnimationFrame(function () {
    for (loop1 in LEVEL) {
        LEVEL[loop1].width = window.innerWidth;
        LEVEL[loop1].height = window.innerHeight;
    }
});