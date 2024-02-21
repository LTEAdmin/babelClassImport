import Cliente from "../src/cliente.js"
import Impuesto from "../src/impuesto.js"

debugger;
let client1 = new Cliente("Maria Gonzalez", new Impuesto(1000000, 180000));
let client2 = new Cliente("Juan Perez", new Impuesto(2000000, 300000));
console.log(` ${client1.nombre} debe pagar ${client1.impPagar()}`);
console.log(client2);

