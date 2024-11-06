
const express = require('express');
const connectDB = require('./config/db');
const notesRoutes = require('./routes/notesRoutes');

const app = express();
app.use(express.json());
connectDB();

app.use('/api', notesRoutes);

module.exports = app;
