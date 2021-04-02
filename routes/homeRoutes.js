const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
    try {
        res.sendFile('../public/index.html')
    } 
    catch(err) {
        console.log(err);
    }
});

router.get('/exercise', (req, res) => {
    try {
        res.sendFile(path.join(process.cwd() ,'public/exercise.html'))
    } 
    catch(err) {
        res.status(500).json(err);
    }
});

router.get('/stats', (req, res) => {
    try{
        res.sendFile(path.join(process.cwd(), 'public/stats.html'))
    }
    catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;