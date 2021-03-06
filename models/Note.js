const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
  });
 
  const Note = mongoose.model('Notes', noteSchema);

  module.exports = Note;  