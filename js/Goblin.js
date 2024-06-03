import {Monstruo} from  "./Mounstruo.js"

export class Goblin extends Monstruo {
    // Constructor que inicializa al héroe con valores específicos de vida y ataque.
    constructor(nombre= 'Goblin', vida = 80, ataque = 28) {
        super(nombre, vida, ataque); // Llama al constructor de la clase base Moustruo
    }
}