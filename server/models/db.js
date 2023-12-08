const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const MONGOUSER = process.env.MONGOUSER;
const MONGOPASSWORD = process.env.MONGOPASSWORD;
const MONGO_URL = process.env.MONGO_URL;
const MONGOPORT = process.env.MONGOPORT;

const uri = `mongodb://${MONGOUSER}:${MONGOPASSWORD}@${MONGO_URL}:${MONGOPORT}`;

async function main() {
  try {
    await mongoose.connect(uri, { dbName: 'diary' });
    console.log('MongoDB connected successfully. 🥳');
  } catch (error) {
    console.error('Error connecting to MongoDB: 🛑', error);
  }
}

module.exports = main;
