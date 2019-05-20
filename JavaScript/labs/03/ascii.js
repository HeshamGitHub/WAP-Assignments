"use strict";
window.onload = function() {

    document.getElementById("fontsize").onchange = function() {
        var selectedFontSize = document.getElementById("fontsize").value;
        document.getElementById("text-area").style.fontSize = selectedFontSize;
    };

    document.getElementById("animation").onchange = function() {
        var selectedAnimation = document.getElementById("animation").value;
        var animationStr = ANIMATIONS[selectedAnimation];
        document.getElementById("text-area").value = animationStr;
    };

    var startBtn = document.getElementById("start");
    startBtn.onclick = function() {
        start();
    };

    var stopBtn = document.getElementById("stop");
    stopBtn.onclick = function() {
        stop();
    };

    var turboBtn = document.getElementById("turbo");
    turboBtn.onclick = function() {
        turboMode();
    };
};


var timer = null;
var framesCout = 0;
var animationArrFrames;

function start() {
    document.getElementById("start").disabled = true;
    document.getElementById("animation").disabled = true;
    document.getElementById("stop").disabled = false;
    animationArrFrames = document.getElementById("text-area").value.split("=====\n");
    if (timer === null) {
        if (document.getElementById("turbo").checked) {
            timer = setInterval(draw, 50);
        } else {
            timer = setInterval(draw, 250);
        }
    }
}

function stop() {
    document.getElementById("start").disabled = false;
    document.getElementById("animation").disabled = false;
    document.getElementById("stop").disabled = true;
    clearInterval(timer);
    timer = null;
    document.getElementById("text-area").value = animationArrFrames.join("=====\n");
    framesCout = 0;
}


function turboMode() {
    var status = document.getElementById("turbo");
    if (timer !== null) {
        if (status.checked) {
            clearInterval(timer);
            timer = setInterval(draw, 50);
        } else {
            clearInterval(timer);
            timer = setInterval(draw, 250);
        }
    }
}

function draw() {
    var txtArea = document.getElementById("text-area");

    if (framesCout < animationArrFrames.length) {
        txtArea.value = animationArrFrames[framesCout];
        framesCout++;
    } else {
        txtArea.value = animationArrFrames[0];
        framesCout = 1;
    }
}