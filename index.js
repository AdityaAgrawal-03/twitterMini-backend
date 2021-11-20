
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require('express');
const app = express();
const { initializeDBConnection } = require("./db/db.connect")
const posts = require("./routes/post.router");
const signup = require("./routes/signup.router");
const login = require("./routes/login.router");

app.use(bodyParser.json());
app.use(cors());

initializeDBConnection();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.use("/posts", posts);
app.use("/signup", signup);
app.use("/login", login);

app.listen(3000, () => {
  console.log('server started');
});

