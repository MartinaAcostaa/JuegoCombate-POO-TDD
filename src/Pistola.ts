import {Arma} from "./Arma";

export class Pistola extends Arma {
    constructor() {
        super(1, 5); // Una pistola tiene un daño de 1 y 5 municiones al ser creada
    }
}
