const Comparacion = require('Comparacion');

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: 'Jaime' };
    user['lastName'] = 'Lopez';
    return user;
  },
  fetchUser: () =>
  Comparacion
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.data)
      .catch(err => 'error')
};

module.exports = functions;
