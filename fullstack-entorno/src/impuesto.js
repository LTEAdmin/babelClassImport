export class Impuesto {
  constructor(mBruto = 0, deduccion = 0) {
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

export default Impuesto