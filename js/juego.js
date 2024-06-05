// Juego.js
// Importa las clases necesarias.
import { Heroe } from './Heroe.js';
import { Orco } from './Orco.js';
import { Goblin } from './Goblin.js';
import { Kobold } from './Kobold.js';

export class Juego {
    // Clase principal que maneja la lógica del juego
    constructor() {
      this.heroe = new Heroe("Héroe", 100, 0, 20); // Crear al héroe
      this.monstruoActual = null; // No hay monstruo al inicio
      this.logElement = document.getElementById("log"); // Elemento para mostrar mensajes
    }
    log(mensaje) {
      // Mostrar un mensaje en el registro del juego
        this.logElement.innerHTML += mensaje + "<br>";
    }

    atacar() {
      // Método para que el héroe ataque al monstruo actual
    if (this.monstruoActual) {
        this.heroe.atacar(this.monstruoActual); // El héroe ataca al monstruo
        this.log(`Has atacado al ${this.monstruoActual.nombre} y le has hecho ${this.heroe.daño} de daño.`);
        if (this.monstruoActual.vida <= 0) {
            this.log(`¡Has derrotado al ${this.monstruoActual.nombre}!`);
            this.monstruoActual = null; // El monstruo muere
        } else {
          this.monstruoContraataca(); // El monstruo contraataca si sobrevive
        }
    } else {
        this.log("No hay ningún monstruo para atacar.");
    }
    }

    investigar() {
    // Método para que el héroe investigue el entorno
        if (this.monstruoActual) {
            this.log("Ya hay un monstruo presente.");
        } else {
            const probabilidad = Math.random(); // Generar un número aleatorio
            if (probabilidad < 0.25) {
                this.heroe.inventario.push('Poción de vida'); // Encontrar poción de vida
                this.log("Has encontrado una poción de vida y la has añadido a tu inventario.");
            } else if (probabilidad < 0.5) {
                this.heroe.inventario.push('Poción de ataque'); // Encontrar poción de ataque
                this.log("Has encontrado una poción de ataque y la has añadido a tu inventario.");
            } else {
                const monstruos = [Orco, Goblin, Kobold]; // Lista de posibles monstruos
                const indice = Math.floor(Math.random() * monstruos.length); // Elegir un monstruo aleatorio
                this.monstruoActual = new monstruos[indice](); // Crear el monstruo
                this.log(`¡Un ${this.monstruoActual.nombre} ha aparecido!`);
            }
        }
    }
    usarItem() {
      // Método para que el héroe use un objeto de su inventario
      const mensaje = this.heroe.usarItem(); // Llamar al método usarItem del héroe
      this.log(mensaje); // Mostrar el resultado en el registro
    }

    monstruoContraataca() {
    // Método para que el monstruo ataque al héroe
    if (Math.random() < 0.25) { // 25% de probabilidad de fallo
        this.monstruoActual.atacar(this.heroe); // El monstruo ataca al héroe
        this.log(`El ${this.monstruoActual.nombre} te ha atacado y te ha hecho ${this.monstruoActual.ataque} de daño.`);
        if (this.heroe.vida <= 0) {
          this.log("¡Has sido derrotado!"); // El héroe muere
          // Aquí podrías reiniciar el juego o terminarlo.
        }
    } else {
        this.log(`El ${this.monstruoActual.nombre} ha fallado el golpe.`);
    }
    }
}