import { Combatiente } from "./Combatiente";

export class Soldado extends Combatiente {
    constructor() {
        super(1); // Un soldado tiene 1 punto de vida al ser creado
    }
}

