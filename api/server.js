import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
import http from "http";
import "./utils/google-oauth2.js";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { AuthenticationRouter, FieldsRouter, JobSeekerRouter, WorkStatusRouter } from "./routes/index.js";
import { RolesRouter } from "./routes/index.js";
import { LocationRouter } from "./routes/index.js";
import { JobsRouter } from "./routes/index.js";
import { CompanyRouter } from "./routes/index.js";



dotenv.config();

const app = express();
const server = http.createServer(app); 

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "PUT, POST, GET, DELETE, OPTIONS, PATCH",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use("/upload/image", express.static(path.join(__dirname, "upload", "image")));

app.get("/hello", (req, res) => {
  return res.status(200).json("hello");
});

app.use("/api/auth", AuthenticationRouter);
app.use("/api/roles", RolesRouter);
app.use("/api/location", LocationRouter);
app.use("/api/jobs", JobsRouter);
app.use("/api/company", CompanyRouter);
app.use("/api/workstatus", WorkStatusRouter);
app.use("/api/fields", FieldsRouter);
app.use("/api/jobSekker", JobSeekerRouter);





const port = process.env.PORT || 9999;
const MONGODB_URI = process.env.MONGODB_URI;

const io = new Server(server, {
  cors: corsOptions,
});

io.on("connection", (socket) => {
  console.log("A user just connected", socket.id);
  socket.on("disconnect", () => {
    console.log("A user disconnected: ", socket?.userId);
  });
});

server.listen(port, async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error.message}`);
  }
  console.log(`Server running on http://localhost:${port}`);
});

export { io };
