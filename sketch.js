const BODY = document.body;

let title = document.getElementById("title");
title.style['left'] = window.innerWidth/2 - window.getComputedStyle(title)['width'].slice(0, window.getComputedStyle(title)['width'].length - 2)/2 + "px";
title.style['top'] = window.innerWidth/8 - window.getComputedStyle(title)['height'].slice(0, window.getComputedStyle(title)['height'].length - 2)/2 + "px";

let play = document.getElementById("play");
play.onclick = function () {
    title.remove();
    play.remove();
}
play.style['left'] = window.innerWidth/2 - window.getComputedStyle(play)['width'].slice(0, window.getComputedStyle(play)['width'].length - 2)/2 + "px";
play.style['top'] = window.innerWidth/4 - window.getComputedStyle(play)['height'].slice(0, window.getComputedStyle(play)['height'].length - 2)/2 + "px";