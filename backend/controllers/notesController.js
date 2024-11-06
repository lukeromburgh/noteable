
const Note = require('../models/Note');

exports.createNote = async (req, res) => {
  const newNote = new Note(req.body);
  await newNote.save();
  res.json(newNote);
};
