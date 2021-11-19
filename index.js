
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require('express');
const app = express();
const { initializeDBConnection } = require("./db/db.connect")

app.use(bodyParser.json());
app.use(cors());

initializeDBConnection();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});

