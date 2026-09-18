import {Combatiente} from "./Combatiente";

export class Buque extends Combatiente {
    constructor() {
        super(3); // Un buque tiene 3 puntos de vida al ser creado
    }
}
