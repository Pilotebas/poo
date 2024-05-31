import {personaje} from "./personaje.js";

export class mago extends personaje {

    constructor(nom){
        super();
        this.nombre = nom;
        this.setvida = 15;
    }
}