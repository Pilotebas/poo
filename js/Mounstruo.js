import {Criatura} from "./Criatura.js"

// Clase abstracta Monstruo que extiende de Criatura.
export class Monstruo extends Criatura {
    // Constructor que inicializa el nombre, vida y ataque del monstruo.
    constructor(nombre, vida, ataque) {
        // Verifica si se está intentando instanciar directamente la clase Monstruo.
        if (new.target === Monstruo) {
            throw new TypeError("Cannot construct Monstruo instances directly");
        }
        super(nombre, vida, ataque); // Llama al constructor de la clase base Criatura.
    }
}

// Exporta la clase Monstruo para que pueda ser utilizada en otros archivos.

