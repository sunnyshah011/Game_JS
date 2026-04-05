import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected sucessfully:", connectionInstance.connection.host);
    } catch (error) {
        console.log("error msg::", error.message);
    }
}

export default connectDB