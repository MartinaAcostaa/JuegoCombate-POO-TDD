import {Arma} from "./Arma";

export class Escopeta extends Arma {
    constructor() {
        super(2, 3); // Una escopeta tiene un daño de 2 y 3 municiones al ser creada
    }
}