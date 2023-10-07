import mongoose from 'mongoose'

export const connectMongoDB = async (isProvider) => {
    try{
        await mongoose.connect(process.env.MONGODB_URI + process.env.MONGODB_USERAUTH_DB);
        console.log("Connected")
    } catch(error) {
        console.log("Error ", error)
    }
}