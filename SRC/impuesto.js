class Impuestos{
    constructor(mBruto, deduccion) {
        this._mBruto = mBruto;
        this._deduccion = deduccion;
    }
    get mBruto(){
        return this._mBruto;
    }
    get deduccion(){
        return this._deduccion;
    }
    set mBruto(mBruto){
        this._mBruto = mBruto;
    }
    set deduccion(deduccion){
        this._deduccion = deduccion;
    }
}
export default Impuestos