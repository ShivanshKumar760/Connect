import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
// const userRoute = require("./routes/users");
// const authRoute = require("./routes/auth");
// const postRoute = require("./routes/posts");
dotenv.config();
const app = express();
const port=process.env.PORT||4000;






//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("common"));

// app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/posts", postRoute);

// app.listen(8800, () => {
//   console.log("Backend server is running!");
// });


mongoose.connect(process.env.MONGO_LOCAL)
.then(()=>{
    console.log("Connected to mongoDB");
}).then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running on :${port}`);
    })
}).catch((err)=>{console.log(err);console.log("Oops could not connect to db!try again")});