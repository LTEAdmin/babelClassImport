import Impuesto from "../src/impuesto.js"

export class Cliente{
    debugger;
    constructor(nombre, nimpuesto) {
        debugger;
        this._nombre = nombre;
        this._impCliente = nimpuesto;        
    }
    get nombre(){
        return this._nombre;
    }
    
    set nombre(nombre){
        this._nombre = nombre;
    }
    
    get impCliente(){
        return this._impCliente;
    }
    set impCliente(nimpuesto) {
        this._impCliente = nimpuesto;
    }
    
    get impPagar() {
        return (this.impCliente.mBruto - this.impCliente.deduccion) * 0.21;
    }
    
}
export default Cliente