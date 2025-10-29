import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded());

app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use(morgan("dev"));

connectDB();

app.use("/api", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use('/api/students', studentRoutes );


// app.get("/",(req,res)=>{
// res.send("Hello from server")
// })

// Error handlerC
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `process ID ${process.pid}:server running on PORT ${PORT} in dev mode`
  );
});
