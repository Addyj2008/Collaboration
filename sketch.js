const BODY = document.body;

let title = document.getElementById("title");
if (window.innerWidth > window.innerHeight) {
    title.style['font-size'] = window.innerHeight/10 + "px";
} else {
    title.style['font-size'] = window.innerWidth/10 + "px";
}
title.style['left'] = window.innerWidth/2 - window.getComputedStyle(title)['width'].slice(0, window.getComputedStyle(title)['width'].length - 2)/2 + "px";
title.style['top'] = window.innerHeight/5 - window.getComputedStyle(title)['height'].slice(0, window.getComputedStyle(title)['height'].length - 2)/2 + "px";

let play = document.getElementById("play");
play.style['left'] = window.innerWidth/2 - window.getComputedStyle(play)['width'].slice(0, window.getComputedStyle(play)['width'].length - 2)/2 + "px";
play.style['top'] = window.innerHeight * 2/5 - window.getComputedStyle(play)['height'].slice(0, window.getComputedStyle(play)['height'].length - 2)/2 + "px";
play.onmouseover = function () {
    play.style['boxShadow'] = window.innerWidth/30 + "px " + window.innerHeight/60 + "px " + "10px #000ff0";
    play.style['opacity'] = 0.75;
};
play.onmouseout = function () {
    play.style['boxShadow'] = "0px 0px";
    play.style['opacity'] = 1;
};
play.onclick = function () {
    for (let loop1 in HOME) {
        HOME[loop1].remove();
    }
};

let htp = document.getElementById("htp");
htp.style['left'] = window.innerWidth/2 - window.getComputedStyle(play)['width'].slice(0, window.getComputedStyle(play)['width'].length - 2)/2 + "px";
htp.style['top'] = window.innerHeight * 3/5 - window.getComputedStyle(play)['height'].slice(0, window.getComputedStyle(play)['height'].length - 2)/2 + "px";
htp.onmouseover = function () {
    htp.style['boxShadow'] = window.innerWidth/30 + "px " + window.innerHeight/60 + "px " + "10px #000ff0";
    htp.style['opacity'] = 0.75;
};
htp.onmouseout = function () {
    htp.style['boxShadow'] = "0px 0px";
    htp.style['opacity'] = 1;
};
htp.onclick = function () {
    for (let loop1 in HOME) {
        HOME[loop1].remove();
    }
};

let settings = document.getElementById("settings");
settings.style['left'] = window.innerWidth/2 - window.getComputedStyle(play)['width'].slice(0, window.getComputedStyle(play)['width'].length - 2)/2 + "px";
settings.style['top'] = window.innerHeight * 4/5 - window.getComputedStyle(play)['height'].slice(0, window.getComputedStyle(play)['height'].length - 2)/2 + "px";
settings.onmouseover = function () {
    settings.style['boxShadow'] = window.innerWidth/30 + "px " + window.innerHeight/60 + "px " + "10px #000ff0";
    settings.style['opacity'] = 0.75;
};
settings.onmouseout = function () {
    settings.style['boxShadow'] = "0px 0px";
    settings.style['opacity'] = 1;
};
settings.onclick = function () {
    for (let loop1 in HOME) {
        HOME[loop1].remove();
    }
};

const HOME = [title, play, atp, settings];