"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class Impuestos {
  constructor(mBruto, deduccion) {
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
}
var _default = exports.default = Impuestos;