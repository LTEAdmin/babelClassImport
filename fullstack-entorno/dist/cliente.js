"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Cliente = void 0;
require("core-js/modules/es.symbol.description.js");
var _impuesto = _interopRequireDefault(require("../src/impuesto.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class Cliente {
  constructor(nombre, nimpuesto) {
    _defineProperty(this, "debugger", void 0);
    debugger;
    this._nombre = nombre;
    this._impCliente = nimpuesto;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get impCliente() {
    return this._impCliente;
  }
  set impCliente(nimpuesto) {
    this._impCliente = nimpuesto;
  }
  get impPagar() {
    return (this.impCliente.mBruto - this.impCliente.deduccion) * 0.21;
  }
}
exports.Cliente = Cliente;
var _default = exports.default = Cliente;