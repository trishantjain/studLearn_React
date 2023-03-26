const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/studLearn"

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI)
        console.log("Mongoose Connected...");
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectToMongo;