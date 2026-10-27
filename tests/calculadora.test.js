const {somar, subtrair, multiplicar, dividir} = require('../calculadora.js');

test('Deve somar 2 + 3 e retornar 5', ()=>{
    expect(somar(2,3)).toBe(5);
});

test('Deve somar 3 + 7 e retornar 13', ()=>{
    expect(somar(6,7)).toBe(13);
});
test('Deve subtrair 7 - 7 e retornar 0', ()=>{
    expect(subtrair(7,7)).toBe(0);
});
test('Deve subtrair 10 - 6 e retornar 4', ()=>{
    expect(subtrair(10,6)).toBe(4);
});
test('Deve multiplicar 10 * 9 e retornar 90', ()=>{
    expect(multiplicar(10,9)).toBe(90);
});
test('Deve multiplicar 2 * 15 e retornar 30', ()=>{
    expect(multiplicar(2,15)).toBe(30);
});
test('Deve dividir 10 / 2 e retornar 5', ()=>{
    expect(dividir(10,2)).toBe(5);
});
test('Deve dividir 25 / 5 e retornar 5', ()=>{
    expect(dividir(25,5)).toBe(5);
});
