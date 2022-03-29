const db = require("mongoose");

async function connectDB(uri) {
  await db
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.error("[ERROR]: " + err);
    });
}

module.exports = {
  connectDB,
};
