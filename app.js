const path = require('path');
const fs = require('fs');
const chokidar = require('chokidar');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join( __dirname, 'public' )));

app.get('/', (req, res) => {
  res.send('hello world');
})

const PORT = process.env.PORT || 3000;
app.listen( PORT, () => (console.log(`Node Server running on port: ${PORT}`)));