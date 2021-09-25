const express = require('express');
const userController = require('./controllers/user.controller');

const app = express();

//json data =>req.body
app.use(express.json());

//GET http://127.0.0.1:5000
app.get('/', (req, res) => {
  res.status(200).send('Hello from server!');
});

//POST http://127.0.0.1:5000
app.post('/', () => {});

//work with users entity
//GET http://127.0.0.1:5000/users
app.get('/users', userController.getUsers);

//POST http://127.0.0.1:5000/users + {}
app.post('/users', userController.createUser);

//GET http://127.0.0.1:5000/users/1
app.get('/users/:userId', userController.getUserById);

//PATCH http://127.0.0.1:5000/users/1 + {}
app.patch('/users/1', userController.updateUser);

//DELETE http://127.0.0.1:5000/users/1
app.delete('/users/1', userController.deleteUser);

module.exports = app;
