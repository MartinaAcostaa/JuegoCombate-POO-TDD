import { describe, it, expect } from "vitest";
import { Soldado } from "./Soldado";
import { Pistola } from "./Pistola";


describe("Soldado", () => {
    it("deberia estar vivo al ser creado", () => {
        const soldado = new Soldado();
        expect(soldado.estaVivo()).toBe(true);
    });

    it("deberia morir al recibir un disparo", () => {
        const soldado = new Soldado();
        soldado.recibirDisparo(1);
        expect(soldado.estaVivo()).toBe(false);
    });

        it("no deberia hacer daño al disparar sin un arma equipada", () => {
        const soldadoA = new Soldado();
        const soldadoB = new Soldado();
        soldadoA.disparar(soldadoB);
        expect(soldadoB.estaVivo()).toBe(true);
    });

    it("deberia hacer daño al disparar con un arma equipada", () => {
        const soldadoA = new Soldado();
        const soldadoB = new Soldado();
        soldadoA.equiparArma(new Pistola());
        soldadoA.disparar(soldadoB);
        expect(soldadoB.estaVivo()).toBe(false);
    });

});