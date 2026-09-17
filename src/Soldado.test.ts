import { describe, it, expect } from "vitest";
import { Soldado } from "./Soldado";

describe("Soldado", () => {
    it("deberia estar vivo al ser creado", () => {
        const soldado = new Soldado();
        expect(soldado.estaVivo()).toBe(true);
    });
});