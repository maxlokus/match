const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./db')

require('dotenv/config');

app.use(cors());
app.use(express.json());

const testAdd = async () => {
  const result = await pool.query('ALTER TABLE public.test ADD COLUMN lalalla character varying')
  console.log("🚀 ~ file: server.js ~ line 15 ~ testAdd ~ result", result)
}

testAdd()

app.get('/', (req, res) => {
  res.send('home page');
});

const postRoute = require('./routes/posts');
app.use('/posts', postRoute);

// mongoose.connect('mongodb+srv://match:12345@match-server.ocnee.mongodb.net/matchDB?retryWrites=true&w=majority',{ useNewUrlParser: true }, ()=> console.log('connected to DB'))

app.listen(3000);

