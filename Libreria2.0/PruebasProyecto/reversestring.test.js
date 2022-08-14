const reverseString = require('./reversestring');

test('reverseString Funcion existe', () => {
  expect(reverseString).toBeDefined();
});

test('Palabra escrita alreves ', () => {
  expect(reverseString('Libro')).toEqual('orbil');
});

test('Palabra Invertida con Mayusculas', () => {
  expect(reverseString('LIBRO')).toEqual('ORBIL');
});
