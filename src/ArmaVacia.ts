import { Arma } from "./Arma";

export class ArmaVacia extends Arma {
    constructor() {
        super(0, 0); // Un arma vacía no tiene daño ni municiones
    }
}
