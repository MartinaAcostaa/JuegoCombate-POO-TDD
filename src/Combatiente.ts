import { Escudo } from "./Escudo";

export abstract class Combatiente {
  protected vida: number;
  protected escudo: Escudo;

  constructor(vidaInicial: number) {
    this.vida = vidaInicial;
    this.escudo = new Escudo(0); // sin escudo real = 0% de reduccion (Null Object)
  }

  public estaVivo(): boolean {
    return this.vida > 0;
  }

  public equiparEscudo(escudo: Escudo): void {
    this.escudo = escudo;
  }

  public recibirDisparo(danio: number): void {
    const danioReal = this.escudo.reducirDanio(danio);
    this.vida -= danioReal;
  }
}
