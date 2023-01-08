const { ObjectId } = require("mongodb");
const db = require("./db");

class Model {
  collection = ''
  properties = []

  async all() {
    const dbConnection = await db.connection();
    return await dbConnection.collection(this.collection).find().toArray()
  }

  async find(query) {
    const dbConnection = await db.connection();
    return await dbConnection.collection(this.collection).find(query).toArray()
  }

  async findOne(id) {
    const dbConnection = await db.connection();
    return await dbConnection.collection(this.collection).findOne({ _id: ObjectId(id) })
  }

  async create(data) {
    const dataToSave = {}
    this.properties.forEach(property => {
      if (data[property]) {
        dataToSave[property] = data[property]
      }
    })
    const dbConnection = await db.connection();
    await dbConnection.collection(this.collection).insertOne(dataToSave)
  }

  async update(id, data) {
    const dataToSave = {}
    this.properties.forEach(property => {
      if (data[property]) {
        dataToSave[property] = data[property]
      }
    })
    const dbConnection = await db.connection();
    await dbConnection.collection(this.collection).updateOne({ _id: ObjectId(id) }, { $set: dataToSave})
  }
}

module.exports = Model