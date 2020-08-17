const path = require('path');
// const fs = require('fs');
// const chokidar = require('chokidar');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

/* include files */
const init = require('./services/folder-event-listenter');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join( __dirname, 'public' )));

app.get('/', (req, res) => {
  res.send('hello world');
});

init();

const PORT = process.env.PORT || 3000;
app.listen( PORT, () => (console.log(`Node Server running on port: ${PORT}`)));