const userSeeder = require("../seeders/userSeeder");

async function createUserCommand() {
  await userSeeder()
  process.exit()
}
createUserCommand()
