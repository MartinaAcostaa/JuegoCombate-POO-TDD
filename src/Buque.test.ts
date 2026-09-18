import {describe, it, expect} from "vitest";
import { Buque } from "./Buque";

describe("Buque", () => {
    it("deberia estar vivo al ser creado", () => {
        const buque = new Buque();
        expect(buque.estaVivo()).toBe(true);
    });

    it("no deberia morir al recibir dos disparo", () => {
        const buque = new Buque();
        buque.recibirDisparo(1);
        buque.recibirDisparo(1);
        expect(buque.estaVivo()).toBe(true);
    });

    it("deberia morir al recibir tres disparos", () => {
        const buque = new Buque();
        buque.recibirDisparo(1);
        buque.recibirDisparo(1);
        buque.recibirDisparo(1);
        expect(buque.estaVivo()).toBe(false);
    });
 });    