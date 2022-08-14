const LibroArray = require('./chunk');

test('LibroArray la funcion existe', () => {
  expect(LibroArray).toBeDefined();
});

test('Matriz de 1o valores con  2 columnas', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const chunkedArr = LibroArray(numbers, len);

  expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});

test('Matriz de 3 valores con  1 columnas', () => {
  const numbers = [1, 2, 3];
  const len = 1;
  const chunkedArr = LibroArray(numbers, len);

  expect(chunkedArr).toEqual([[1], [2], [3]]);
});
