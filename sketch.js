const BODY = document.body;
let title = document.createElement('h1');
title.innerHTML = "Platformer";
title.style.position = "absolute";
title.style.left = "50%";
title.style.color = "#000ff0";
title.style.width = "auto";
title.style.height = "auto";
BODY.appendChild(title);
let play = document.createElement('button');
play.innerHTML = "PLAY";
play.type = "button";
play.style.height = "auto";
play.style.width = "auto";
play.style.color = "#ff00ff";
play.style.position = "absolute";
play.style.left = "50%";
play.style.top = "25%";
play.style.width = "auto";
play.style.height = "auto";
play.onclick = function () {
    title.remove();
    play.remove();
}
BODY.appendChild(play);