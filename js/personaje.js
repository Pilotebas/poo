export class personaje{
    #vida = 20;
    #defensa= 50;
    #dano = 5;
    constructor(){
        this.setNombre = undefined;
    }    
    set setNombre(nom="Jhon"){
        this.nombre = nom;
    }

    set setVida(puntos){
        this.#vida += puntos;
    }

    set setVida(puntos){
        this.#defensa += puntos;
    }

    get getDefensa(){
        return this.#defensa;
    }
    atacar(instrumento = 0){
        if(instrumento) this.#dano += instrumento;
        return instrumento
    }
}
