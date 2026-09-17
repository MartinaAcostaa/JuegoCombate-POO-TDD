import { Combatiente } from "./Combatiente";

export class Tanque extends Combatiente {
    constructor() {
        super(2); // Un tanque tiene 2 puntos de vida al ser creado
    }
 }