const uuidv4 = require('uuid');

const usersDB = [
  {
    id: 1,
    firstName: 'Test1',
    lastName: 'Userovich1',
    email: 'test1@gmail.com',
  },
  {
    id: 2,
    firstName: 'Test2',
    lastName: 'Userovich2',
    email: 'test2@gmail.com',
  },
];

module.exports.getUsers = (req, res) => {
  res.status(200).send(usersDB);
};

module.exports.createUser = (req, res) => {
  const { body } = req;
  console.log(`body`, body);
  const newUser = { ...body, id: uuidv4() };
  //   console.log(`newUser`, newUser);
  //   usersDB.push(newUser);
  //   const [createdUser] = usersDB.filter(u => u.id == usersDB.length);
  if (newUser) {
    res.status(200).send(newUser);
  }

  res.status(404).send('User not created');
};

module.exports.getUserById = (req, res) => {
  //   console.log(`req.params.userId`, req.params.userId);
  const {
    params: { userId },
  } = req;

  const [foundUser] = usersDB.filter(u => u.id == userId);

  if (foundUser) {
    res.status(200).send(foundUser);
  }

  res.status(404).send('User not found');
};

module.exports.updateUser = (req, res) => {};

module.exports.deleteUser = (req, res) => {};
