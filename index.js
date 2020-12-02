const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();

const PORT = 5000;

// connect to db
connectDB();
app.use(express.json({ extended: false }));
app.use(cors());

app.listen(PORT, () => console.log('server is up and running'));

// routes

app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));
