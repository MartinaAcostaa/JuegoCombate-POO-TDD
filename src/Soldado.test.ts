import { describe, it, expect } from "vitest";
import { Soldado } from "./Soldado";

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
});