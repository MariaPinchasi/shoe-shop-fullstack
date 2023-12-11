const express = require('express');
const { getShoes,
    getShoe,
    createShoe,
    updateShoe,
    deleteShoe,
} = require('../controllers/shoes');

const router = express.Router();

router
    .route('/')
    .get(getShoes)
    .post(createShoe);

router
    .route('/:id')
    .get(getShoe)
    .put(updateShoe)
    .delete(deleteShoe);

module.exports = router;