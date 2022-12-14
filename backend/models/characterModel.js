const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  id: Number,
  name: String,
  alternate_names: [],
  species: String,
  gender: String,
  house: String,
  dateOfBirth: String,
  yearOfBirth: String,
  wizard: String,
  ancestry: String,
  eyeColor: String,
  hairColor: String,
  wand: {},
  patronus: String,
  hogwartsStudent: Boolean,
  hogwartsStaff: Boolean,
  actor: String,
  alternate_actores: String,
  alive: Boolean,
  image: String,
});

const Character = mongoose.model('Character', characterSchema);
module.exports = Character;
