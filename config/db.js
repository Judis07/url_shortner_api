const mongoose = require('mongoose');
const config = require('config');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('mongodb connected!!');
  } catch (err) {
    console.log('mongod not connected', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
