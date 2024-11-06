
const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');

router.post('/notes', notesController.createNote);
// Additional routes

module.exports = router;
