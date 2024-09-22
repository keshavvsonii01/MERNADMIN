const mongoose = require("mongoose");

PASS = encodeURIComponent('Heroku#01')

const URI = 'mongodb+srv://admin-keshav:'+ PASS +'@workstarters.v1bdm8s.mongodb.net/mern_admin2?retryWrites=true&w=majority&appName=WorkStarters'


mongoose.connect(URI);

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful to DB");
  } catch (error) {
    console.error("database connection failed");
    process.exit(0);
  }
};

module.exports = connectDb;
