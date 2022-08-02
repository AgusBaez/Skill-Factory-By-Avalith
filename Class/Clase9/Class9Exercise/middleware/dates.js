function myDate(req, res, next) {
  req.date = new Date();
  next();
}

function today(req, res, next) {
  let today = req.date;
  req.today = today.getDay();
  next();
}

function month(req, res, next) {
  let today = req.date;
  req.month = today.getMonth();
  next();
}

let dates = {
  myDate,
  today,
  month,
};

module.exports = dates;
