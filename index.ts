import Cuadrado from "./classes/cuadrado";
import Producto from "./classes/producto";
import Triangulo from "./classes/triangulo";

const p1 = new Producto(4.5, 'Buena', 'Sony', 'Walkman');
const p2 = new Producto(8.0, 'Buena', 'Sony', 'PayStation');

p1.mostrar();
p2.mostrar();

const miCuadrado = new Cuadrado(6);
console.log(`El area es ${miCuadrado.obtenerArea()}`);
console.log(`El perimetro es ${miCuadrado.obtenerPerimetro()}`);

const miTriangulo = new Triangulo(6);
console.log(`El area es ${miTriangulo.obtenerArea()}`);
console.log(`El perimetro es ${miTriangulo.obtenerPerimetro()}`);
