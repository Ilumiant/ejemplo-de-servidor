const userService = require('../services/userService')

async function userSeeder() {
  const result = await userService.createUser({
    name: 'Administrador',
    email: 'admin@mail.com',
    password: '123456'
  })

  if (result.error) {
    console.log(result.messages)
    throw new Error('User cannot be created')
  }
}

module.exports = userSeeder