const mongoose = require('mongoose');
const slugify = require('slugify');

const ShoeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
            trim: true,
            minlength: [3, 'Name can not be less than 3 characters']
        },
        slug: String,
        brand: {
            type: String,
            required: [true, 'Please add a brand'],
            minlength: [2, 'Description can not be less than 2 characters']
        },
        image: {
            type: String,
            match: [
                /(https?:\/\/.*\.(?:png|jpg|jpeg))/,
                'Please use a valid URL'
            ]
        },
        price: {
            type: Number,
            min: [1, 'Price can not be lower than 1$']
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
);

// Create shoe slug from the name
ShoeSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});


module.exports = mongoose.model('Shoe', ShoeSchema);