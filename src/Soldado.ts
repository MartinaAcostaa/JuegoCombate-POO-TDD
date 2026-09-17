export class Soldado {
  private vida: number;

  constructor() {
    this.vida = 1;
    }

    public estaVivo(): boolean {
        return this.vida > 0;
    }   

    public recibirDisparo(danio: number): void {
        this.vida -= danio;
    }   
}
