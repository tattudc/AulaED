//import Hello from "../src/Hello";
//import Pilha from "../src/Pilha";
import Fila from "../src/Fila"
let f;

beforeEach(() => {
    f = new Fila(5);
});

test("fila", () => {
    expect(f.size()).toBe(0);
    f.enqueue('A');
    expect(f.size()).toBe(1)
    expect(f.front()).toBe("A")
    f.enqueue("B")
    expect(f.front()).toBe("A")
    expect(f.size()).toBe(2)
    f.enqueue("C")
    f.enqueue("D")
    f.enqueue("E")
    expect(()=>{
        f.enqueue("G")
    }).toThrowError("Overflow")
    expect(f.dequeue()).toBe("A")
    expect(f.dequeue()).toBe("B")
    expect(f.dequeue()).toBe("C")
    expect(f.dequeue()).toBe("D")
    expect(f.dequeue()).toBe("E")
    expect(() => {
        f.dequeue()
    }).toThrowError("Underflow")
    expect(f.size()).toBe(0)
})

/*
test("sayHello()", () => {
	let p = new Hello();
	expect(p.sayHello()).toBe("hello");
});

test("sum()", () => {
	let p = new Hello();
	expect(p.sum(5, 7)).toBe(12);
});

test("mult()", ()=> {
    let p = new Hello();
    expect(p.mult(5, 10)).toBe(50);
})

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
*/