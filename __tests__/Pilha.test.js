import Pilha from "../src/Pilha";

test("lifo", () =>{
    let p = new Pilha(5);
    p.push(3);
    p.push(3);
    p.push(3);
    p.push(5);
    p.push(1);
    expect(p.pop()).toBe(1);
})

test("stackunderflow", () =>{
    let p = new Pilha(5);
    expect(p.pop()).toBe(false);
})