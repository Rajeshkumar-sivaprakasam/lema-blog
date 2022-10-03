import db from "../db.js";
import bcrpyt from "bcrpytjs";

export const register = (req, res) => {
  //Check user exist

  const q = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(q, [req.body.email, req.body.password], (err, data) => {
    if (err) res.status(500).json(err);
    if (data.length) return res.status(409).json("User Already Exists!");

    //Hash the password and create a user
    const salt = bcrpyt.genSaltSync(10);
    const hash = bcrpyt.hashSync(req.body.password, salt);

    const q = "insert into users(`usernmae`,`email`,`password`) values (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });
  });
};
export const login = (req, res) => {};
export const logout = (req, res) => {};
