export default class Fila {
    constructor(tamanho = 10){
        this.tamanho = tamanho
        this.dados = []
        this.fim = 0
        this.inicio = 0
    }

    enqueue(newData){
        if(this.isFull()){
            throw new Error("Overflow");
        }
        else{
            this.dados[this.fim++] = newData;
        }
    }
    
    dequeue(){
        if(this.isEmpty()){
            throw new Error("Underflow")
        }
        else{
            return this.dados[this.inicio++]
        }
    }
    
    isEmpty(){
        return this.fim === this.inicio //Conferir se tá vazia
    }
    
    front(){
        if(this.isEmpty()){
            throw new Error("Underflow")
        }
        else{
            return this.dados[this.inicio] //Primeiro elemento
        }
    }
    
    size(){
        return this.fim - this.inicio //Achar o tamanho
    }

    isFull(){
        return this.size() === this.tamanho //Conferir se ta cheia
    }
}