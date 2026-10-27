const {somar, subtrair, multiplicar, dividir} = require('../calculadora.js');

test('Deve somar 2 + 3 e retornar 5', ()=>{
    expect(somar(2,3)).toBe(5);
});

test('Deve somar 3 + 7 e retornar 13', ()=>{
    expect(somar(6,7)).toBe(13);
});

test('Deve subtrair 10 - 8 e retornar 2', ()=>{
    expect(subtrair(10,8)).toBe(2);
});

test('Deve subtrair 1 - 10 e retornar 11', ()=>{
    expect(subtrair(1,-10)).toBe(11);
});

test('Deve multiplicar 3 * 9 e retornar 27', ()=>{
    expect(multiplicar(3,9)).toBe(27);
});

test('Deve  multiplicar 2 * -4 e retornar -8', ()=>{
    expect(multiplicar(2,-4)).toBe(-8);
});

test('Deve dividir  9/4 e retornar 2.25', ()=>{
    expect(dividir(9,4)).toBe(2.25);
});

test('Deve dividir 3 / 0 e retornar nada', ()=>{
    expect(dividir(3,0)).toBe(NaN);
});
