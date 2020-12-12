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