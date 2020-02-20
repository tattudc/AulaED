import TestRunner from "jest-runner";

export default class Pilha {
    
    constructor(tamanho){
        this.tamanho = tamanho
        this.dados = []
        this.topo = -1
    }

    push(num){
        if(this.topo + 1 >= this.tamanho){
            return false;
        }
        this.dados[++this.topo] = num;
    }

    pop(){
        if(this.topo == -1 ){
            return false;
        }
        return this.dados[this.topo--];
    }
}
