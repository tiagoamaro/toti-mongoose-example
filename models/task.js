const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ModelSchema = new Schema({
  name: { type: String, required: true },
  status: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', ModelSchema );