let menubutton = document.querySelector(".menu-button")
let menu = document.querySelector(".menu")
let fade_layer = document.querySelector(".fade-layer")

function show(){
    menu.classList.toggle("show")
    fade_layer.classList.toggle("visible")
}

fade_layer.addEventListener("click",show)
menubutton.addEventListener("click",show)

let slideIndex = 1
function slideMove(n) {
    slideIndex += n
}