"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Impuesto = void 0;
class Impuesto {
  constructor() {
    let mBruto = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    let deduccion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    this._mBruto = mBruto;
    this._deduccion = deduccion;
  }
  get mBruto() {
    return this._mBruto;
  }
  get deduccion() {
    return this._deduccion;
  }
  set mBruto(mBruto) {
    this._mBruto = mBruto;
  }
  set deduccion(deduccion) {
    this._deduccion = deduccion;
  }
  /*  calcularImpuesto() {
     return (this.mBruto - this.deduccion) * 0.21;
   } */
}
exports.Impuesto = Impuesto;
var _default = exports.default = Impuesto;