import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM POSTS WHERE CATEGORY=?"
    : "SELECT * FROM POSTS";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  const q =
    "SELECT p.id `username`,`title`, `desc`,p.img,u.img AS userImg,`category`,`date` FROM users u JOIN posts p ON  u.id=p.uid WHERE p.id=?";

  db.query(q, [req.params.id], (err, data) => {
    console.log("err===>", JSON.stringify(err));
    if (err) return res.status(500).send(err);

    return res.status(200).json(data[0]);
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.access_token;

  if (!token) return res.status(401).send("Unauthorized!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).send("Invaild token!");
    const q =
      "INSERT INTO  POSTS (`title`,`desc`,`img`,`date`,`uid`,`category`) values (?)";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.date,
      userInfo.id,
      req.body.cat,
    ];

    db.query(q, [values], (err, data) => {
      console.log("err", JSON.stringify(err));
      if (err) return res.status(500).json(err);
      return res.status(200).send("Post created successfully!");
    });
  });
};

export const deletePost = (req, res) => {
  const token = req.cookies.access_token;

  if (!token) return res.status(401).send("Unauthorized!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).send("Invaild token!");
    const postId = req.params.id;
    const q = "DELETE FROM POSTS WHERE `id` = ? AND `uid` = ?`";
    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).send("you can delete only your post");

      return res.status(200).send("Post Deleted successfully!");
    });
  });
};

export const updatePost = (req, res) => {
  const token = req.cookies.access_token;

  if (!token) return res.status(401).send("Unauthorized!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).send("Invaild token!");
    console.log(req);
    const postId = req.params.id;
    const q =
      "UPDATE POSTS SET `title`=?,`desc`=?,`img`=?,`category`=? WHERE `id` = ? AND `uid`= ?";

    const values = [req.body.title, req.body.desc, req.body.img, req.body.cat];

    db.query(q, [...values, postId, userInfo.id], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).send("Post updated successfully!");
    });
  });
};
