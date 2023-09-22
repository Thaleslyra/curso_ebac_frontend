function Car (modelo) {
    this.modelo = modelo;   
}

function CarroAVenda(modelo,status,preco){

    this.status = status;
    let _preco = preco;

    this.getPreco = function(){
        return _preco;
    }

    this.setPreco = function(valor){
        if(typeof valor === 'number'){
            _preco = valor;
        }
    }

    
    Car.call(this, modelo); 
}


function CarroFinaciado(modelo){

    CarroAVenda.call(this, modelo, "Finaciado", 30000);

    this.correcaoValor = function(){
        const novoPreco = this.getPreco() * 1.5;
        this.setPreco(novoPreco);
    }

}

function CarroAVista(modelo){
    CarroAVenda.call(this, modelo, "A vista", 50000);
    this.correcaoValor = function(){
        const novoPreco = this.getPreco() * 0.9;
        this.setPreco(novoPreco);

    }
}

const carro1 = new CarroFinaciado("Ranger");
console.log(carro1.modelo);
console.log(carro1.status);
carro1.correcaoValor();
console.log(carro1.getPreco());

console.log("__________**********___________")

const carro2 = new CarroAVista("Hilux");
console.log(carro2.modelo);
console.log(carro2.status);
carro2.correcaoValor();
console.log(carro2.getPreco());

console.log("__________**********___________")

const carro3 = new CarroAVista("Pajero");
carro3.setPreco(20000);
console.log(carro3.modelo);
console.log(carro3.status);
carro3.correcaoValor();
console.log(carro3.getPreco());