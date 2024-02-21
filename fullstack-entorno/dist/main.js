"use strict";

var _cliente = _interopRequireDefault(require("../src/cliente.js"));
var _impuesto = _interopRequireDefault(require("../src/impuesto.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
debugger;
let client1 = new _cliente.default("Maria Gonzalez", new _impuesto.default(1000000, 180000));
let client2 = new _cliente.default("Juan Perez", new _impuesto.default(2000000, 300000));
console.log(" ".concat(client1.nombre, " debe pagar ").concat(client1.impPagar()));
console.log(client2);