const { v4: uuidv4 } = require('uuid');

const usersDb = [
  {
    id: uuidv4(),
    firstName: 'User1',
    lastName: 'Userovich1',
    email: 'test1@test.test',
  },
  {
    id: uuidv4(),
    firstName: 'User2',
    lastName: 'Userovich2',
    email: 'test2@test.test',
  },
];

class User {
  static users = usersDb;
  static getUsers () {
    return User.users;
  }
  static getUserById (id) {
    const [foundUser] = User.users.filter(u => u.id == id);
    return foundUser;
  }
  static createUser (body) {
    const createdUser = { ...body, id: uuidv4() };
    User.users.push(createdUser);
    return User.users[User.users.length - 1];
  }
}

module.exports = User;
