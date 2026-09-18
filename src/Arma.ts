export abstract class Arma {
    protected danio: number;
    protected municiones: number;

    constructor(danio:number, municiones:number) {
        this.danio = danio;
        this.municiones = municiones;
    }

    public disparar(): number {
        if (this.municiones > 0) {
            this.municiones--;
            return this.danio;
        }
        return 0;
    }
}   