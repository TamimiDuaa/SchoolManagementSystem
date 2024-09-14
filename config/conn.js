require('dotenv').config;
const mongoose = require('mongoose');

const connectToDB = async()=>{

    await mongoose.connect(process.env.ATLAS_URI);
    console.log("connected To database");
}

module.exports = connectToDB;