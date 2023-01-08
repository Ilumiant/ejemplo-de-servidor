const { MongoClient } = require("mongodb");
const connectionString = "mongodb://localhost:27017";

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  async connection() {
    try {
      await client.connect();
      const db = client.db("ejemplo");
      return db
    } catch(e) {
      await client.close();
    }
  },
};
