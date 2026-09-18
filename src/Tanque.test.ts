import { describe, it, expect } from "vitest";
import { Tanque } from "./Tanque";
import { Escudo } from "./Escudo";

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

    it("deberia reducir el daño recibido por un escudo", () => {
        const tanque = new Tanque();
        tanque.equiparEscudo(new Escudo(50));
        tanque.recibirDisparo(2); // sin escudo, 2 de daño lo mataria (vida=2)
        expect(tanque.estaVivo()).toBe(true); // con 50% de escudo, el daño real es 1, sobrevive
    });
 });
