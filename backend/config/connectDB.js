const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        
        // console.log(`MongoDB connected: ${connect.connection.host}`);
        console.log(`MongoDB Connected`);
    } catch(error) {
        console.log(error);
        process.exit(1);   // If any error exit the process
    }
}

module.exports = connectDB;


// Use this function in server.js to connect to mongoDB & start the server

// const startServer = async () => {
//     try {
//        await connectDB();
//        app.listen(PORT, () => {
//            console.log(`Server running on port ${PORT}`);
//        })
//     } catch(error) {
//         console.log(error);
//     }
// }

// startServer();