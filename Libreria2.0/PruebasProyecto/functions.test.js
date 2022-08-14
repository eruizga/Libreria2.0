const functions = require('./functions');


const nameCheck = () => console.log('Buscando nombre');

describe('Buscando nombre', () => {
  beforeEach(() => nameCheck());

  test('Usuario es Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });

  test('Usuario es Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });
});

// toBe
test('Suma 2 + 2 para ser igual a 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

// not
test('Suma 2 + 2 para no ser igual a 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});


// toBeNull
test('debe ser nulo', () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual
test('El usuario debe ser  Angel Maria', () => {
  expect(functions.createUser()).toEqual({
    firstName: 'Angel',
    lastName: 'Maria'
  });
});

// Menor que y mayor que
test('debe ser mas bajo que 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('El no esta dentro del equipo', () => {
  expect('equipo').not.toMatch(/I/i);
});

// Arrays
test('Administrador dentro de de nombres de usuario', () => {
  usernames = ['Angel', 'karen', 'admin'];
  expect(usernames).toContain('admin');
});


test('El nombre obtenido debe de ser JUANITO', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Juanito');
});
