const {somar, subtrair, multiplicar, dividir} = require('../calculadora.js');

test('Deve somar 2 + 3 e retornar 5', ()=>{
    expect(somar(2,3)).toBe(5);
});

test('Deve somar 6 + 7 e retornar 13', ()=>{
    expect(somar(6,7)).toBe(13);
});

test('Deve subtrair 3 - 7 e retornar -4', ()=>{
    expect(subtrair(3,7)).toBe(-4);
});

test('Deve subtrair 10 - 2 e retornar 8', ()=>{
    expect(subtrair(10,2)).toBe(8);
});

test('Deve multiplicar 3 * 7 e retornar 21', ()=>{
    expect(multiplicar(3,7)).toBe(21);
});

test('Deve multiplicar 5 * 5 e retornar 25', ()=>{
    expect(multiplicar(5,5)).toBe(25);
});

test('Deve dividir 10 / 2 e retornar 5', ()=>{
    expect(dividir(10,2)).toBe(5);
});

test('Deve dividir 5 / 0 e retornar infinity', ()=>{
    expect(dividir(5,0)).toBe(Infinity);
});
