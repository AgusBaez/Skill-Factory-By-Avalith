const express = require('express')
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
const movieController = require('./controllers/movieController');
// const { myDate } = require('./middlewares/dates');
// const dates = require('./middlewares/dates');
// const errorHandler = require('./middlewares/errorHandler');


// function helloWorld(req, res) {
//     res.send('Hello World! Its: ' + req.today + ' of ' + req.month)
// }
// router.get('/', [dates.myDate, dates.today, dates.month], helloWorld)
// router.get('/ghibli', movieController.getRanking)
// router.get('/ghibli/:name', [dates.myDate, dates.today, dates.month], movieController.getMovieByName)
router.get('/ghibli/:score', movieController.getMoviesByScore)
// router.use(errorHandler.notFound);

module.exports = router;