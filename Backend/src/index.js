import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

// import express from "express"
// const app = express()

dotenv.config({
  path: './.env',
});

connectDB() // this is an async method which returns a promise
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port : ${process.env.PORT}`)
        })
    })
    .catch((err) => {
    console.log("MONGO DB connection failed !! ", err)
})



// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", () => {
//             console.log("ERR", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening in port ${process.env.PORT}`);
//         })

//     } catch (error) {
//         console.error("Error ", error)
//         throw error
//     }
// })()
