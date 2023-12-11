const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Load models
const Shoe = require('./models/Shoe');


// Connect to DB
mongoose.connect(process.env.MONGO_URI, {});

// Read JSON files
const shoes = JSON.parse(
    fs.readFileSync(`${__dirname}/_data/shoes.json`, 'utf-8')
);

// Import into DB
const importData = async () => {
    try {
        await Shoe.create(shoes);
        console.log('Data Imported...'.green.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
};

// Delete data
const deleteData = async () => {
    try {
        await Shoe.deleteMany();
        console.log('Data Destroyed...'.red.inverse);
        process.exit();
    } catch (err) {
        console.error(err);
    }
};

if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deleteData();
}