import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import "./utils/google-oauth2.js";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
dotenv.config();
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "PUT, POST, GET, DELETE, OPTIONS, PATCH",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Serve static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(
  "/upload/image",
  express.static(path.join(__dirname, "upload", "image"))
);

app.get("/hello", (req, res) => {
  return res.status(200).json("hello");
});

const port = process.env.PORT || 9999;
const MONGODB_URI = process.env.MONGODB_URI;
app.listen(port, async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error.message}`);
  }
  console.log(`Server running on http://localhost:${port}`);
});
