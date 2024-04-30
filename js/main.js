let menubutton = document.querySelector(".menu-button")
let menu = document.querySelector(".menu")
let fade_layer = document.querySelector(".fade-layer")
let header = document.querySelector("header")

let burgerone = document.querySelector("#burger-one")
let burgertwo = document.querySelector("#burger-two")
let burgerthree = document.querySelector("#burger-three")

function show(){
    menu.classList.toggle("show")
    fade_layer.classList.toggle("visible")

    burgerone.classList.toggle("animation-one")
    burgerone.classList.toggle("reverse-one")

    burgertwo.classList.toggle("animation-two")
    burgertwo.classList.toggle("reverse-two")

    burgerthree.classList.toggle("animation-3")
    burgerthree.classList.toggle("reverse-3")
}

fade_layer.addEventListener("click",show)
menubutton.addEventListener("click",show)


const texts = document.querySelectorAll(".text")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
    console.log(entries)
}, {
    threshold: 0.5,
})

texts.forEach(text => {
    observer.observe(text)
})


let mercury = document.querySelector("#mercury")
let venus = document.querySelector("#venus")
let earth = document.querySelector("#earth")
let mars = document.querySelector("#mars")
let jupiter = document.querySelector("#jupiter")
let saturn = document.querySelector("#saturn")
let uranus = document.querySelector("#uranus")
let neptune = document.querySelector("#neptune")
let fadeLayer2 = document.querySelector(".fade-layer2")

function zoom(planet){
    planet.classList.toggle("zoom")
    fadeLayer2.classList.toggle("zoom")
}
