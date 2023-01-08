const bookService = require('../services/bookService')

async function createBook(req, res) {
  const { name, userId } = req.body

  const result = await bookService.createBook({ name, userId })

  if (result.error) {
    return res.status(422).json({ messages: result.messages })
  }

  return res.status(201).json({ message: "book created successfully"})
}


module.exports = { createBook }