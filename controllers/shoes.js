const Shoe = require('../models/Shoe');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc      Get all shoes
// @route     GET /api/v1/shoes
// @access    Public
exports.getShoes = asyncHandler(async (req, res, next) => {
    const shoes = await Shoe.find();
    res.status(200)
        .json({ success: true, count: shoes.length, data: shoes });

});

// @desc      Get single shoe
// @route     GET /api/v1/shoes/:id
// @access    Public
exports.getShoe = asyncHandler(async (req, res, next) => {
    const shoe = await Shoe.findById(req.params.id);

    if (!shoe) {
        return next(
            new ErrorResponse(`shoe not found with id of ${req.params.id}`, 404)
        )
    }

    res.status(200)
        .json({ success: true, data: shoe });
});

// @desc      Create new shoe
// @route     POST /api/v1/bootshoes
// @access    Private
exports.createShoe = asyncHandler(async (req, res, next) => {
    const shoe = await Shoe.create(req.body);
    res.status(201).json({ success: true, data: shoe });
});

// @desc      Update shoe
// @route     PUT /api/v1/shoe/:id
// @access    Private
exports.updateShoe = asyncHandler(async (req, res, next) => {
    const shoe = await Shoe.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if (!shoe) {
        return next(
            new ErrorResponse(`Shoe not found with id of ${req.params.id}`, 404)
        );
    }

    res.status(200)
        .json({ success: true, data: shoe });
});

// @desc      Delete shoe
// @route     DELETE /api/v1/shoes/:id
// @access    Private

exports.deleteShoe = asyncHandler(async (req, res, next) => {
    const shoe = await Shoe.findByIdAndDelete(req.params.id);

    if (!shoe) {
        return next(
            new ErrorResponse(`shoe not found with id of ${req.params.id}`, 404)
        );
    }

    res.status(200)
        .json({ success: true, data: {} });
});
