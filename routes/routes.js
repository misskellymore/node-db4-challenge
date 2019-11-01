const router = require('express').Router();

const model = require('./model.js');





router.get('/', (req, res) => {
    model.find()

    .then(data => res.status(200).json(data))

});


router.get('/:id', (req, res) => {

    const {id} = req.params;

    model.findJoin(id)

    .then(data => res.status(200).json(data))
})


router.get('/instructions/:id', (req, res) => {

    const {id} = req.params;

    model.findJoinAgain(id)

    .then(data => res.status(200).json(data))
})






module.exports = router;

