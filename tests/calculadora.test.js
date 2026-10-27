const {somar, subtrair, multiplicar, dividir} = require('../calculadora.js');

test('Deve somar 2 + 3 e retornar 5', ()=>{
    expect(somar(2,3)).toBe(5);
});

test('Deve somar 3 + 7 e retornar 13', ()=>{
    expect(somar(6,7)).toBe(13);
});

test('Subtrai 7-3 e retorna 4', () => {
  expect(subtrair(7,3)).toBe(4)
})

test('Multiplica 7 por 3 e retorna 21', () => {
  expect(multiplicar(7,3)).toBe(21)
})

test('Divide 8 por 2 e retorna 4', () => {
  expect(dividir(8,2)).toBe(4)
})

test('Divide 8 por 0 e retorna infinito', () => {
  expect(dividir(8,0)).toBe(Infinity)
})