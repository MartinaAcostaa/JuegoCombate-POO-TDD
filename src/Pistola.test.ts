import { describe, it, expect } from "vitest";
import { Pistola } from "./Pistola";

describe("Pistola", () => {
    it("deberia hacer 1 de daño al disparar", () => {
        const pistola = new Pistola();
        expect(pistola.disparar()).toBe(1);
    });

    it("deberia hacer 0 de daño al quedarse sin municiones", () => {
        const pistola = new Pistola(); // arranca con 5 municiones
        pistola.disparar(); // 1
        pistola.disparar(); // 2
        pistola.disparar(); // 3
        pistola.disparar(); // 4
        pistola.disparar(); // 5
        expect(pistola.disparar()).toBe(0); // 6, sin municiones
    });
});

