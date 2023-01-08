const { ObjectId } = require("mongodb");
const db = require("../config/db")
const User = require('../model/user')
const userService = require('../services/userService')

async function getUsers(req, res) {
  try {
    const users = await userService.getUsers()
    
    return res.status(200).json(users)
    
  } catch (error) {
    return res.status(500).json({ message: "Error del servidor"})
    
  }
}

async function createUser(req, res) {
  const { name, email, password } = req.body

  const result = await userService.createUser({ name, email, password })

  if (result.error) {
    return res.status(422).json({ messages: result.messages })
  }

  return res.status(201).json({ message: "user created successfully"})
}

async function updateUser(req, res) {
  try {
    const { userId } = req.params
    const { name } = req.body
    if (!ObjectId.isValid(userId)) return res.status(422).json({ message: "id is not valid"})
    if (!name) return res.status(422).json({ message: "name is required"})
    if (typeof name !== 'string') return res.status(422).json({ message: "name must be string"})
  
    const user = await User.findOne(userId)

    if (!user) {
      return res.status(404).json({ message: "user not found"})
    }
  
    User.update(userId, { name: name })
  
    return res.status(201).json({ message: "user updated successfully"})
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Error del servidor"})
  }
}

module.exports = { getUsers, createUser, updateUser }