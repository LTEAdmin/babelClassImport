import cliente from "./cliente.js"
import Impuestos from "./impuesto.js"

let client1 = new cliente("Maria", new Impuestos(1000000, 180000));
console.log(client1);