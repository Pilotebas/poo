import {Criatura} from "./Criatura.js"


export class Monstruo extends Criatura {
    // Constructor que inicializa el nombre, vida y ataque del monstruo.
    constructor(nombre, vida, ataque) {
        super(nombre, vida, ataque); // Llama al constructor de la clase base Criatura.
    }
}

// Exporta la clase Monstruo para que pueda ser utilizada en otros archivos.

