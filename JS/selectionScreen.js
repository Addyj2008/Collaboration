const LS = [];
for (let loop1 in document.getElementsByClassName("level-selection")) {
    if (isFinite(loop1 * 1)) {
        LS.push(document.getElementsByClassName("level-selection")[loop1]);
    }
}
function displaySelectionScreen () {
    for (let loop1 in LS) {
        document.getElementById("level-selection-container").appendChild(LS[loop1]);
    }
}
function hideSelectionScreen () {
    for (let loop1 in LS) {
        LS[loop1].remove();
    }
}

window.requestAnimationFrame(function () {
    loop2 = 0;
    for (loop1 in LS) {
        LS[loop1].style['left'] = window.innerWidth/4 * (loop2 % 4) + window.innerWidth/40 + "px";
        LS[loop1].style['top'] = window.innerHeight/4 * (loop2 - (loop2 % 4))/4 + window.innerHeight/40 + "px";
        if (LS[loop1].nodeName === "IMG") {
            LS[loop1].onclick = function () {
                if (this.src.slice(this.src.length - 13) !== "levelLock.png") {
                    displayLevelScreen(this.id.slice(5, LS[1].id.length - 7) - 1);
                    hideSelectionScreen();
                }
            }
        }
        loop2++;
    }
});

let back = document.getElementById('back');
back.onclick = function () {
    hideSelectionScreen();
    displayHomeScreen();
}