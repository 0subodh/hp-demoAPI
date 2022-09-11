const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Character = require('../models/characterModel');

dotenv.config({ path: './config.env' });

const characters = JSON.parse(
  fs.readFileSync(`${__dirname}/characters.json`, 'utf-8')
);

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log('Database connection successful');
});

const importData = async () => {
  try {
    await Character.create(characters);
    console.log('Data Loaded Successfully');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Character.deleteMany({});
    console.log('Data Deleted Successfully');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

console.log(process.argv);
