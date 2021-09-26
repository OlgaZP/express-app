const User = require('./../models/user');

module.exports.getUsers = (req, res) => {
  const foundUsers = User.getUsers();
  res.status(200).send(foundUsers);
};

module.exports.createUser = (req, res) => {
  const { body } = req;

  const createdUser = User.createUser(body);

  res.status(201).send(createdUser);
};

module.exports.getUserById = (req, res) => {
  const {
    params: { userId },
  } = req;

  const foundUser = User.getUserById(userId);

  if (foundUser) {
    res.status(200).send(foundUser);
  }

  res.status(404).send('User not found');
};

module.exports.updateUser = (req, res) => {};

module.exports.deleteUser = (req, res) => {};
