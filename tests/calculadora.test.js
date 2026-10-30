const {somar, subtrair, multiplicar, dividir} = require('../calculadora.js');

test('Deve somar 20 + 5 e retornar 25', ()=>{
    expect(somar(20,5)).toBe(25);
});

test('Deve somar 10 + 7 e retornar 17', ()=>{
    expect(somar(10,7)).toBe(17);
});
test('Deve subtrair 5 - 2 e retornar 3', ()=>{
    expect(subtrair(5,2)).toBe(3);
});
test('Deve subtrair 80 - 11 e retornar 69', ()=>{
    expect(subtrair(80,11)).toBe(69);
});
test('Deve multiplicar 100 x 2 e retornar 200', ()=>{
    expect(multiplicar(100,2)).toBe(200);
});
test('Deve multiplicar 63 x 4 e retornar 252', ()=>{
    expect(multiplicar(63,4)).toBe(252);
});
test('Deve dividir 20 / 4 e retornar 5', ()=>{
    expect(dividir(20,4)).toBe(5);
});
test('Deve dividir 50 / 5 e retornar 10', ()=>{
    expect(dividir(50,5)).toBe(10);
});
test('Deve dividir 90 / 0 e retornar NaN', ()=>{
    expect(dividir(90,0)).toBe(NaN);
});
