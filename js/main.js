import { Juego } from "./juego.js"
import { Heroe } from "./Heroe.js"

const juego1 = new Juego();
const atacar = document.getElementById("atacar")
atacar.addEventListener("click",() => {
    juego1.atacar(juego1.heroe);
})

const investigar = document.getElementById("investigar")
investigar.addEventListener("click",() => {
    juego1.investigar(juego1.heroe);
})

const usaritem = document.getElementById("usaritem")
usaritem.addEventListener("click",() => {
    juego1.usarItem();
})