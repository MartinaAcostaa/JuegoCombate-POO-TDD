export class Escudo {
    private porcentajeReduccion: number;

    constructor(porcentajeReduccion: number) {
        this.porcentajeReduccion = porcentajeReduccion;
    }

    public reducirDanio(danio: number): number {
        return danio * (1 - this.porcentajeReduccion / 100);
    }
}