export abstract class Combatiente {
    protected vida: number;

    constructor(vidaInicial:number) {
        this.vida = vidaInicial;
    }

    public estaVivo(): boolean {
        return this.vida > 0;
    }   

    public recibirDisparo(danio: number): void {
        this.vida -= danio;
    }   
}
