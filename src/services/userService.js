const User = require("../model/user");
const bcrypt = require('bcrypt');
const Book = require("../model/book");
const { creatingUserSchema } = require("../validations/userValidations");

const encryptData = (data) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(data, salt);
  return hash;
};

async function getUsers() {
  const users = await User.all()

  for (let i = 0; i < users.length; i++) {
    const books = await Book.find({ userId: users[i]._id.toString() })
    users[i].books = books
    delete users[i].password
  }

  return users
}

async function createUser({ name, email, password }) {

  const { error } = creatingUserSchema.validate({ name, email, password }, { abortEarly: false })

  if (error) {
    return {
      error: true,
      messages: error
    }
  }

  await User.create({
    name,
    email,
    password: encryptData(password)
  })

  return {
    error: false,
    message: 'User created succesfully'
  }
}

module.exports = { getUsers, createUser }