const Model = require("../config/model");

class User extends Model {

  properties = [
    "name",
    "email",
    "password"
  ]

  collection = 'users'

}

module.exports = new User()