const express = require('express');
const cors = require('cors');
const characterRouter = require('./routes/characterRoute');

const app = express();

app.use(
  cors({
    origin: '*',
  })
);

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/characters', characterRouter);

module.exports = app;
