import mongoose from "mongoose";

const URI = "mongodb+srv://admin:DPFpII41QCRG6hqB@cluster0.6sneze2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const databaseConnection = async () => {
    if (!global.mongoose) {
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(URI)
    }
}


export default databaseConnection