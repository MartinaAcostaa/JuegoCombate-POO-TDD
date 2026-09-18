import { Escudo } from "./Escudo";
import { Arma } from "./Arma";
import { ArmaVacia } from "./ArmaVacia";

export abstract class Combatiente {
  protected vida: number;
  protected escudo: Escudo;
  protected arma: Arma;

  constructor(vidaInicial: number) {
    this.vida = vidaInicial;
    this.escudo = new Escudo(0);
    this.arma = new ArmaVacia();
  }

  public estaVivo(): boolean {
    return this.vida > 0;
  }

  public equiparEscudo(escudo: Escudo): void {
    this.escudo = escudo;
  }

  public equiparArma(arma: Arma): void {
    this.arma = arma;
  }

  public recibirDisparo(danio: number): void {
    const danioReal = this.escudo.reducirDanio(danio);
    this.vida -= danioReal;
  }

  public disparar(objetivo: Combatiente): void {
    const danio = this.arma.disparar();
    objetivo.recibirDisparo(danio);
  }
}
