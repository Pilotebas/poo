export class Criatura {
    // Clase base para todos los seres vivos (héroes y monstruos)
    constructor(nombre, vidaMaxima, ataque) {
      this.nombre = nombre; // Nombre de la criatura
      this.vida = vidaMaxima; // Vida actual de la criatura
      this.vidaMaxima = vidaMaxima; // Vida máxima de la criatura
      this.ataque = ataque; // Daño que inflige la criatura al atacar
    }
    recibirDaño(daño) {
        // Método para reducir la vida de la criatura cuando recibe daño
        this.vida -= daño;
        if (this.vida < 0) this.vida = 0; // Asegura que la vida no sea negativa
    }
    
    atacar(objetivo) {
        // Método para que la criatura ataque a un objetivo (otra criatura)
        objetivo.recibirDaño(this.ataque);
    }
}
