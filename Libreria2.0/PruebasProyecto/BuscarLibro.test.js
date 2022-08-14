const BuscarLibro = require('./BuscarLibro');

test('BuscarLibro la funcion existe', () => {
  expect(typeof isAnagram).toEqual('function');
});

test('"ElAmor" esta en categoria "Love"', () => {
  expect(BuscarLibro('ElAmor', 'Love')).toBeTruthy();
});

test('"Libro" esta en categoria "Nuevo"', () => {
  expect(BuscarLibro('libro', 'Nuevo')).toBeTruthy();
});

test('"Lectura" no esta incluido en"Libro"', () => {
  expect(BuscarLibro('Lectura', 'Libro')).toBeFalsy();
});
