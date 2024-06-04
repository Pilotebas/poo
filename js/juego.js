// Juego.js
// Importa las clases necesarias.
import {Orco} from './Orco.js';
import {Goblin} from './Goblin.js';
import {Kobold} from './Kobold.js';

export class Juego {
    constructor() {
        this.historial = []; // Inicializa el historial vacío.
        this.monstruo = null; // Inicializa el monstruo actual como null.
    }

    // Método para agregar un mensaje al historial y mostrarlo en consola.
    loguear(mensaje) {
        this.historial.push(mensaje);
        console.log(mensaje);
    }

    // Método para investigar y generar un nuevo monstruo aleatorio.
    investigar() {
        // Verifica si actualmente hay un monstruo y si tiene vida mayor a 0.
        if (this.monstruo && this.monstruo.vida > 0) {
            // Si hay un monstruo con vida, muestra un mensaje indicando que no se puede investigar.
            this.loguear('No puedes investigar mientras haya un monstruo con vida.');
            return; // Sale del método para evitar la creación de un nuevo monstruo.
        }
        
        // Array que contiene las clases de los diferentes tipos de monstruos.
        const tiposMonstruo = [Orco, Goblin, Kobold];
        
        // Genera un índice aleatorio para seleccionar un tipo de monstruo del array.
        const indiceAleatorio = Math.floor(Math.random() * tiposMonstruo.length);
        
        // Crea una nueva instancia del monstruo seleccionado aleatoriamente.
        this.monstruo = new tiposMonstruo[indiceAleatorio]();
        
        // Agrega un mensaje al historial y lo muestra en la consola indicando qué tipo de monstruo se ha encontrado.
        this.loguear(`Has encontrado un ${this.monstruo.nombre}.`);
    }
    

    // Método para atacar al monstruo actual.
    atacar(heroe) {
        if (!this.monstruo || this.monstruo.vida <= 0) {
            this.loguear('No hay monstruos a los que atacar.');
            return;
        }

        this.monstruo.vida -= heroe.ataque;
        this.loguear(`Atacas a ${this.monstruo.nombre}! Le sacás ${heroe.ataque} de vida.`);
        
        if (this.monstruo.vida <= 0) {
            this.loguear(`Has derrotado al ${this.monstruo.nombre}!`);
            this.monstruo.vida = 0; // Asegura que la vida no sea negativa.
        }
    }
}
