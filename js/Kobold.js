import {Monstruo} from  "./Mounstruo.js"

export class Kobold extends Monstruo {
    // Constructor que inicializa al héroe con valores específicos de vida y ataque.
    constructor(nombre= 'Kobold', vida = 90, ataque = 25) {
        super(nombre, vida, ataque); // Llama al constructor de la clase base Moustruo
    }
}