document.querySelector(".w").addEventListener("click", play);

function play() {
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
}

document.querySelector(".a").addEventListener("click", tom2);

function tom2() {
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
}

document.querySelector(".s").addEventListener("click", tom3);

function tom3() {
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
}

document.querySelector(".d").addEventListener("click", tom4);

function tom4() {
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
}

document.querySelector(".j").addEventListener("click", crash);

function crash() {
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
}

document.querySelector(".k").addEventListener("click", snare);

function snare() {
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
}

document.querySelector(".l").addEventListener("click", kick);

function kick() {
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
}