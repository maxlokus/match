const express = require('express');
const app = express();

require('dotenv/config');

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    res.end('<h1> Im ALIVE!!!!11 </h1>')
  } catch (e) {
    console.error(e.message);
  }
});

app.listen(process.env.PORT || 3000);

