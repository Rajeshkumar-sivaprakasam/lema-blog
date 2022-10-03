import express from "express";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";

const app = express();

app.use(express.json());

app.use("/test", (req, res) => {
  res.json("It Wokring!");
});

app.use("/api/post", postRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(8080, () => {
  console.log("Connected!");
});
