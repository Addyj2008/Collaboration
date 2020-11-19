const BODY = document.body;
let title = document.createElement('h1');
BODY.appendChild(title);
title.innerHTML = "Platformer";
title.style['color'] = "#000ff0";
title.style['position'] = "absolute";
title.style['margin'] = "0px";
title.style['padding'] = "0px";
title.style['left'] = window.innerWidth/2 - window.getComputedStyle(title)['width'].slice(0, window.getComputedStyle(title)['width'].length - 2)/2 + "px";
title.style['top'] = window.innerWidth/8 - window.getComputedStyle(title)['height'].slice(0, window.getComputedStyle(title)['height'].length - 2)/2 + "px";
let play = document.createElement('button');
BODY.appendChild(play);
play.innerHTML = "PLAY";
play.type = "button";
play.onclick = function () {
    title.remove();
    play.remove();
}
play.style['color'] = "#ff00ff";
play.style['position'] = "absolute";
play.style['margin'] = "0px";
play.style['padding'] = "0px";
play.style['width'] = "10%";
play.style['height'] = "5%";
play.style['left'] = window.innerWidth/2 - window.getComputedStyle(play)['width'].slice(0, window.getComputedStyle(play)['width'].length - 2)/2 + "px";
play.style['top'] = window.innerWidth/4 - window.getComputedStyle(play)['height'].slice(0, window.getComputedStyle(play)['height'].length - 2)/2 + "px";