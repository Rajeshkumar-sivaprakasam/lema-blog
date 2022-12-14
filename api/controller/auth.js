import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  //Check user exist

  const q = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(q, [req.body.email, req.body.password], (err, data) => {
    if (err) res.status(500).json(err);
    if (data.length) return res.status(409).json("User Already Exists!");

    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "insert into users(`username`,`email`,`password`) values (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};
export const login = (req, res) => {
  const q = "SELECT * from USERS WHERE email= ?";
  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.json(err);
    if (data && data.length === 0)
      return res.status(404).json("User Not found!");
    //check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(401).json("Wrong username or password!");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");

    const { password, ...others } = data[0];
    return res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  });
};
export const logout = (req, res) => {
  return res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out.");
};
