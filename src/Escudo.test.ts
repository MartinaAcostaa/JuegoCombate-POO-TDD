import { describe, it, expect } from "vitest";
import { Escudo } from "./Escudo";

describe("Escudo", () => {
    it("deberia reducir el daño segun su porcentaje", () => {
        const escudo = new Escudo(50);
        expect(escudo.reducirDanio(1)).toBe(0.5);
    });
 });
