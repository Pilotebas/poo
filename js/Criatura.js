export class Criatura {

    
    constructor(nombre, vida, ataque) {
        // Verifica si se está intentando instanciar directamente la clase Criatura.
        if (new.target === Criatura) {
            throw new TypeError("Cannot construct Criatura instances directly");
        }
        this.nombre = nombre; // Nombre de la criatura.
        this.vida = vida; // Vida actual de la criatura.
        this.vidaMaxima = vida; // Vida máxima de la criatura.
        this.ataque = ataque; // Ataque de la criatura.
    }
}
