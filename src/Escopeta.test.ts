import {describe, it, expect} from "vitest";
import { Escopeta } from "./Escopeta";

describe("Escopeta", () => {
    it("deberia hacer 2 de daño al disparar", () => {
        const escopeta = new Escopeta();
        expect(escopeta.disparar()).toBe(2);
    });

    it("deberia hacer 0 de daño al quedarse sin municiones", () => {
        const escopeta = new Escopeta(); //arranca con 3 municiones
        escopeta.disparar(); // 1
        escopeta.disparar(); // 2
        escopeta.disparar(); // 3
        expect(escopeta.disparar()).toBe(0); // 4, sin municiones
    });
});
