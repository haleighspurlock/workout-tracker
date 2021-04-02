const router = require('express').Router();

router.use('/workouts', require('./workouts'));

module.exports = router;