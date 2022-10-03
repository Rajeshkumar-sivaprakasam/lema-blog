import express from "express";
import { testPost } from "../controller/post.js";

const router = express();

router.get("/", testPost);

export default router;
