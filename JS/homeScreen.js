const HOME = [];
for (let loop1 in document.getElementsByClassName("home")) {
    if (isFinite(loop1 * 1)) {
        HOME.push(document.getElementsByClassName("home")[loop1]);
    }
}
function displayHomeScreen () {
    for (let loop1 in HOME) {
        document.getElementById("home-container").appendChild(HOME[loop1]);
    }
}
function hideHomeScreen () {
    for (let loop1 in HOME) {
        HOME[loop1].remove();
    }
}

window.requestAnimationFrame(function () {
    let loop2 = 0;
    for (loop1 in HOME) {
        loop2++;
        HOME[loop1].style['left'] = window.innerWidth/2 - window.getComputedStyle(HOME[loop1])['width'].slice(0, window.getComputedStyle(HOME[loop1])['width'].length - 2)/2 + "px";
        HOME[loop1].style['top'] = window.innerHeight * loop2/(HOME.length + 1) - window.getComputedStyle(HOME[loop1])['height'].slice(0, window.getComputedStyle(HOME[loop1])['height'].length - 2)/2 + "px";
        if (HOME[loop1].nodeName === "BUTTON") {
            HOME[loop1].onmouseover = function () {
                this.style['boxShadow'] = window.innerWidth/30 + "px " + window.innerHeight/60 + "px " + "10px #000ff0";
                this.style['opacity'] = 0.75;
            };
            HOME[loop1].onmouseout = function () {
                this.style['boxShadow'] = "0px 0px";
                this.style['opacity'] = 1;
            };
        }
    }
});

let title = document.getElementById("title");
if (window.innerWidth > window.innerHeight) {
    title.style['font-size'] = window.innerHeight/10 + "px";
} else {
    title.style['font-size'] = window.innerWidth/10 + "px";
}

let play = document.getElementById("play");
play.onclick = function () {
    hideHomeScreen();
    displaySelectionScreen();
};

let htp = document.getElementById("htp");
htp.onclick = function () {
    hideHomeScreen();
};

let settings = document.getElementById("settings");
settings.onclick = function () {
    hideHomeScreen();
};