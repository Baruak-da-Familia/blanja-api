const db = require("../Configs/dbMysql");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authModel = {
  customerRegister: (body) => {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        if (!err) {
          const { password } = body;
          bcrypt.hash(password, salt, (error, hashedPassword) => {
            if (!error) {
              const newBody = { ...body, password: hashedPassword };
              const qs = "INSERT INTO customer SET ?"; 
              db.query(qs, [newBody, body.email], (err, data) => {
                if (err) {
                  reject({ msg: "User Already Exist" });
                } else {
                  const { insertId } = data;
                  const { name, email } = body;
                  const payload = {
                    id: insertId,
                    email,
                  };
                  const token = jwt.sign(payload, process.env.SECRET_KEY);
                  resolve({ msg: "Register Success", id: insertId, name, email, token });
                }
              });
            }
          });
        }
      });
    });
  },
  sellerRegister: (body) => {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        if (!err) {
          const { password } = body;
          bcrypt.hash(password, salt, (error, hashedPassword) => {
            if (!error) {
              const newBody = { ...body, password: hashedPassword };
              const qs = "INSERT INTO seller SET ?";
              db.query(qs, [newBody, body.email], (err, data) => {
                if (err) {
                  reject({ msg: "User Already Exist" });
                } else {
                  console.log(data);
                  const { insertId } = data;
                  const { email, name, phone_number, store_name } = body;
                  const payload = {
                    id: insertId,
                    email,
                  };
                  const token = jwt.sign(payload, process.env.SECRET_KEY);
                  resolve({
                    msg: "Register Success",
                    id: insertId,
                    name,
                    email,
                    phone_number,
                    store_name,
                    token,
                  });
                }
              });
            }
          });
        }
      });
    });
  },
  customerLogin: (body) => {
    return new Promise((resolve, reject) => {
      const qs =
        "SELECT * FROM customer WHERE email=?";
      db.query(qs, body.email, (err, data) => {
        if (!err) {
          if (data.length) {
            bcrypt.compare(body.password, data[0].password, (error, result) => {
              if (!result) {
                reject({ msg: "Wrong Password" });
              } else if (result === true) {
                const { id, name, avatar, phone_number, gender, dob } = data[0];
                const { email } = body;
                const payload = {
                  id,
                  email,
                };
                const token = jwt.sign(payload, process.env.SECRET_KEY);
                const msg = "Login Success";
                resolve({
                  msg,
                  id,
                  name,
                  avatar,
                  phone_number,
                  gender,
                  dob,
                  token,
                });
              } else {
                reject(error);
              }
            });
          } else {
            const msg = "User Not Found";
            reject({ msg, err });
          }
        } else {
          reject(err);
        }
      });
    });
  },
  sellerLogin: (body) => {
    return new Promise((resolve, reject) => {
      const qs =
        "SELECT * FROM seller WHERE email=?";
      db.query(qs, body.email, (err, data) => {
        if (!err) {
          if (data.length) {
            bcrypt.compare(body.password, data[0].password, (error, result) => {
              if (!result) {
                reject({ msg: "Wrong Password" });
              } else if (result === true) {
                const {
                  id,
                  name,
                  phone_number,
                  store_name,
                  avatar,
                  store_desc,
                } = data[0];
                const { email } = body;
                const payload = {
                  id,
                  email,
                };
                const token = jwt.sign(payload, process.env.SECRET_KEY);
                const msg = "Login Success";
                resolve({
                  msg,
                  id,
                  name,
                  phone_number,
                  store_name,
                  avatar,
                  store_desc,
                  token,
                });
              } else {
                reject(error);
              }
            });
          } else {
            const msg = "User Not Found";
            reject({ msg, err });
          }
        } else {
          reject(err);
        }
      });
    });
  },
};
module.exports = authModel;
