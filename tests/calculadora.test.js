const {somar, subtrair, multiplicar, dividir} = require('../calculadora.js');

test('Deve somar 2 + 3 e retornar 5', ()=>{
    expect(somar(2,3)).toBe(5);
});

test('Deve somar 6 + 7 e retornar 13', ()=>{
    expect(somar(6,7)).toBe(13);
});

test('Deve subtrair 3 - 2 e retornar 1', ()=>{
    expect(subtrair(3,2)).toBe(1);
});

test('Deve subtrair 10 - 7 e retornar 3', ()=>{
    expect(subtrair(10,7)).toBe(3);
});

test('Deve multiplicar 2 * 3 e retornar 6', ()=>{
    expect(multiplicar(2,3)).toBe(6);
});

test('Deve multiplicar 6 * 7 e retornar 42', ()=>{
    expect(multiplicar(6,7)).toBe(42);
});

test('Deve dividir 12 + 3 e retornar 4', ()=>{
    expect(dividir(12,3)).toBe(4);
});

test('Deve dividir 6 / 2 e retornar 3', ()=>{
    expect(dividir(6,2)).toBe(3);
});

test('Deve dividir 10 / 0 e retornar Invalido', ()=>{
    expect(dividir(10,0)).toBe(Infinity);
});