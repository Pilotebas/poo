
import {Heroe} from './Heroe.js';
import {Orco} from './Orco.js';
import {Juego} from './juego.js';
import {Kobold} from './Kobold.js';
import {Goblin} from './Goblin.js';



const heroe1 = new Heroe();
const Orco1 = new Orco();
const Kobold1 = new Kobold();
const Goblin1 = new Goblin();


console.log(heroe1);
console.log(Orco1);
console.log(Kobold1);
console.log(Goblin1);

const juego1 = new Juego();

juego1.atacar(heroe1);

juego1.investigar();

juego1.atacar(heroe1);
juego1.atacar(heroe1);
juego1.atacar(heroe1);
juego1.atacar(heroe1);
juego1.atacar(heroe1);

juego1.atacar(heroe1);
juego1.atacar(heroe1);

juego1.atacar(heroe1);

juego1.atacar(heroe1);
