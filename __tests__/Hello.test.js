import Hello from "../src/Hello";
import Pilha from "../src/Pilha";

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
