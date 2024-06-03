import {Monstruo} from  "./Mounstruo.js"

export class Orco extends Monstruo {
    // Constructor que inicializa al héroe con valores específicos de vida y ataque.
    constructor(nombre= 'Orco', vida = 130, ataque = 15) {
        super(nombre, vida, ataque); // Llama al constructor de la clase base Moustruo
    }
}