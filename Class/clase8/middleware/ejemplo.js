//MIDDLEWARE A NIVEL APP
express = require("express");
app = express();

let requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  next();
};
app.use(requestTime);

//Router + Middleware
app.get("/", (req, res) => {
  let responseText = "Hello user! ";
  responseText += "the time is " + req.requestTime + "";
  res.send(responseText);
});

app.listen(3000);
