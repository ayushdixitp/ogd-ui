const express = require('express');
const app = express();

const cors = require('cors');
app.use(
  cors({
    origin: 'https://localhost:4200',
  })
);

const port = 3000;

app.get('/', (req, res) => {
  let add = `${__dirname}/elements.bundle.js`;
  res.send(`Hello World, from express ${add}`);
});

app.get('/bundle.js', (req, res) => {
  let add = `${__dirname}/elements.bundle.js`;
  res.contentType('text/javascript');
  res.sendFile(add);
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
