import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import { connect } from "mongoose";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import globaErrorController from "./controllers/globaErrorController.js";
import notFoundPageError from "./routes/notFoundPageError.js";
// App Config

const app = express();
const port = process.env.PORT || 5000;
connectDB();
connectCloudinary();

// MIDDLEWARES

app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});
//middlewares that we will assign any err to them using next(err);
//it has to be the last used middleware
app.use(notFoundPageError);
app.use(globaErrorController);

app.listen(port, () => console.log("server started on port :" + port));
