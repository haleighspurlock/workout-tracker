const router = require('express').Router();
const Workout = require('../models/workouts');

// get all workouts
router.get('/range', (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// create new workout
router.post('/', ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// // add a new exercise
// router.put('/:id', (req, res) => {
//     db.Workout.findOneandUpdate({
//         _id: req.params.id
//     })
// });

// get workout
router.get('/', (req, res) => {
    Workout.find({})
    .sort({date: -1 })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;