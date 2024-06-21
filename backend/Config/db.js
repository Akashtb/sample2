const mongoose = require('mongoose')
const connectDb = async () => {
    try {
        // await mongoose.connect('mongodb://127.0.0.1:27017/learnbuds');
        await mongoose.connect(process.env.MONGODb);
        console.log("MongoDb database connected");
    } catch (err) {
        console.log(err);
    }

}
module.exports=connectDb