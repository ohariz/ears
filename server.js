const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3000

const data = {
  '001': {
    name: 'Cat 1',
    pattern: {
      id: '1',
      hue: 0,
      speed: 5,
      reverse: false,
    },
  },
  '002': {
    name: 'Cat 2',
    pattern: {
      id: '1',
      hue: 128,
      speed: 5,
      reverse: true,
    },
  },
  '003': {
    name: 'Cat 3',
    pattern: {
      id: '1',
      hue: 0,
      speed: 5,
      reverse: false,
    },
  },
  '004': {
    name: 'Cat 4',
    pattern: {
      id: '1',
      hue: 0,
      speed: 5,
      reverse: false,
    },
  },
};

app.get('/list', (req, res) => {
  res.json(Object.keys(data));
})

app.get('/config/:id', (req, res) => {
  res.json(data[req.params.id]);
})

app.post('/config/:id', (req, res) => {
  data[req.params.id] = req.body;
  res.send('OK');
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
