import Cliente from "../src/cliente.js"
import Impuestos from "../src/impuesto.js"

let client1 = new Cliente("Maria", new Impuestos(1000000, 180000));
console.log(client1);