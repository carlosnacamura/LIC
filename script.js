const box = document.querySelector(".carrossel")
const imagens = document.querySelectorAll(".carrossel img")
let contador = 0
function slider(){
    contador++
    if (contador > imagens.length - 1){
        contador = 0
    }
    box.style.transform = `translateX(${-contador * 100}vw)`
}
setInterval(slider, 4000)

/* Zoom */
const caixa = document.getElementById("box")
const img = document.querySelector("#box img")
caixa.addEventListener("mousemove",(e)=>{
const x = e.clientX - e.target.offsetLeft
const y = e.clientY - e.target.offsetTop
img.style.transformOrigin = `${x}px ${y}px`
img.style.transform = "scale(1.2)"
img.style.transition = "1s ease"
})

caixa.addEventListener("mouseleave",()=>{
img.style.transformOrigin = "center center"
img.style.transform = "scale(1)"
img.style.transition = "1s ease"
})