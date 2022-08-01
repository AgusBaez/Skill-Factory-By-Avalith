const express = require('express')
//const router = require('./router')
const router = express.Router();
const app = express()
const port = 3000

app.use('/', router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});