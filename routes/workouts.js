const router = require('express').Router();
const db = require('../models');

// get all workouts
router.get('/range', (req, res) => {
    db.Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: '$exercises.duration'}
        }
    }])
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// create new workout
router.post('/', ({ body }, res) => {
    db.Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// // add a new exercise
router.put('/:id', ( {body, params }, res) => {
    db.Workout.findByIdAndUpdate({
        _id: params.id
    },
    {
        $push: {exercises: body }
    },
    {
        new: true})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// get workout
router.get('/', (req, res) => {
    db.Workout.aggregate([{
        $addFields: {
            totalDuration: { $sum: '$exercises.duration'}
        }
    }])
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;