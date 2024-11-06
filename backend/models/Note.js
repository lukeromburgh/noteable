
const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now },
  tags: [String],
  relations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }]
});

module.exports = mongoose.model('Note', NoteSchema);
