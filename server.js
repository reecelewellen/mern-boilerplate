const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require('./routes/api/users');

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// DB Configuration
const db = require('./config/keys').mongoURI;

// Connect to MongoDB/MLab
mongoose
  .connect(db)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => console.log(err));

// Use Routes
app.use('/api/users', users);

// Declare port or accept current environment port (Heroku's for example)
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
