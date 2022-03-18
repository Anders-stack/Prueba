"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cuadrado {
    constructor(logitudLado) {
        this.lados = 4;
        this.longitudLado = logitudLado;
    }
    obtenerArea() {
        const area = this.longitudLado * this.longitudLado;
        return area;
    }
    obtenerPerimetro() {
        const perimetro = this.longitudLado * this.lados;
        return perimetro;
    }
}
exports.default = Cuadrado;
