import { describe, it, expect } from "vitest";
import { Tanque } from "./Tanque";

describe("Tanque", () => {
    it("deberia estar vivo al ser creado", () => {
        const tanque = new Tanque();
        expect(tanque.estaVivo()).toBe(true);
    });

    it("no deberia morir al recibir un solo disparo", () => {
        const tanque = new Tanque();
        tanque.recibirDisparo(1);
        expect(tanque.estaVivo()).toBe(true);
    });

    it("deberia morir al recibir dos disparos", () => {
        const tanque = new Tanque();
        tanque.recibirDisparo(1);
        tanque.recibirDisparo(1);
        expect(tanque.estaVivo()).toBe(false);
    });
 });
