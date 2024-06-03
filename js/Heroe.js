import {Criatura} from "./Criatura.js"

export class Heroe extends Criatura {
    // Constructor que inicializa al héroe con valores específicos de vida y ataque.
    constructor(nombre, vida = 100, ataque = 20) {
        super(nombre, vida, ataque); // Llama al constructor de la clase base Criatura
    }
}

