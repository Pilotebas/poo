import { personaje } from "./personaje.js";
import {mago} from "./mago.js"



export class guerrero extends personaje{
    #pechera = true;
    constructor(nom){
        super();
        this.setNombre = nom;
        this.setVida = 10;
        this.armadura()
    }
    armadura(){
        if(this.#pechera) this.setDefensa = 100;
    }
}
