const router = require('express').Router();
const Users = require('./users-model');

router.get('/', async (req, res, next) => {
    try {
        const userResults = await Users.getAll();
        res.status(200).json(userResults);
    }
    catch (error) {
        next(error);
    }
});

const errorHandler = ((error, req, res, next) => {
    res.status(500).json({ error: 'Check data and retry request' });
    next();
});


module.exports = router;
