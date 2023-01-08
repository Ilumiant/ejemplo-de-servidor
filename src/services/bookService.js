const User = require("../model/user");
const bcrypt = require('bcrypt');
const { ObjectId } = require("mongodb");
const book = require("../model/book");

async function createBook({ name, userId }) {

  const errorMessages = []

  if (!name) {
    errorMessages.push("name is required")
  } else if (typeof name !== "string") {
    errorMessages.push("name must be string")
  }

  if (!userId) {
    errorMessages.push("userId is required")
  } else if (!ObjectId.isValid(userId)) {
    errorMessages.push("userId is not valid")
  }

  if (errorMessages.length) {
    return {
      error: true,
      messages: errorMessages
    }
  }

  const user = await User.findOne(userId)

  if (!user) {
    errorMessages.push("user not found")
  }

  if (errorMessages.length) {
    return {
      error: true,
      messages: errorMessages
    }
  }

  await book.create({
    name,
    date: new Date(),
    userId
  })

  return {
    error: false,
    message: 'Book created succesfully'
  }
}

module.exports = { createBook }