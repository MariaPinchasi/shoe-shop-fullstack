const express = require('express');
const { getShoes,
    getShoe,
    createShoe,
    updateShoe,
    deleteShoe,
} = require('../controllers/shoes');

const router = express.Router();
const { authorize, protect } = require('../middleware/auth');

router
    .route('/')
    .get(getShoes)
    .post(protect, authorize("admin"), createShoe);

router
    .route('/:id')
    .get(getShoe)
    .put(protect, authorize('admin'), updateShoe)
    .delete(protect, authorize('admin'), deleteShoe);

module.exports = router;