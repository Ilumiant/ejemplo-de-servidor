const Model = require("../config/model");

class Book extends Model {

  properties = [
    "name",
    "date",
    "userId"
  ]

  collection = 'books'

}

module.exports = new Book()