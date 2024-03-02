let menubutton = document.querySelector(".menu-button")
let menu = document.querySelector(".menu")
let fade_layer = document.querySelector(".fade-layer")
let header = document.querySelector("header")

function show(){
    menu.classList.toggle("show")
    fade_layer.classList.toggle("visible")
    // header.classList.toggle("visible")
}

fade_layer.addEventListener("click",show)
menubutton.addEventListener("click",show)