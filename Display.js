class Display {
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
    }

    deleteButton(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.printValues();
    }
    deleteAll(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.printValues();
    }

    addNumber(num) {
        if(num === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + num.toString();    
        this.printValues();
    }

    printValues(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }
}