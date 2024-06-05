import { Criatura } from './Criatura.js';

export class Heroe extends Criatura {
    // Clase para el héroe (jugador)
    constructor(nombre , vidaMaxima, ataque, daño) {
      super(nombre, vidaMaxima, ataque); // Llama al constructor de la clase base (Criatura)
      this.daño = daño; // Daño específico del héroe (puede ser diferente al ataque base)
      this.inventario = []; // Inventario del héroe para almacenar pociones
    }
    usarItem() {
        // Método para usar un objeto del inventario (poción)
        if (this.inventario.length > 0) {
            const item = this.inventario.pop(); // Sacar el último objeto del inventario
            if (item === 'Poción de vida') {
                this.vida = Math.min(this.vida + 25, this.vidaMaxima); // Curar vida (máximo hasta la vida máxima)
                return 'Has usado una Poción de vida y te has curado 25 puntos de vida.';
            } else if (item === 'Poción de ataque') {
                this.daño += 10; // Aumentar el daño del héroe
                return 'Has usado una Poción de ataque y tu daño ha aumentado en 10 puntos.';
            } else {
                return 'Ítem no reconocido.';
            }
        } else {
            return 'No tienes ítems para usar.';
        }
    }
}

