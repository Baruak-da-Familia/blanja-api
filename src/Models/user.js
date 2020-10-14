const db = require("../Configs/dbMysql");
const _ = require("underscore");
const bcrypt = require("bcrypt");
const mailer = require("nodemailer");
const cryptoJS = require("crypto-js");

const transporter = mailer.createTransport({
  service: "gmail",
  auth: {
    user: "a.zaky32@gmail.com",
    pass: process.env.EMAIL_TOKEN,
  },
});

const userModel = {
  showDetailCustomer: (id) => {
    let queryStr = "SELECT * FROM customer WHERE customer.id = ?";
    return new Promise((resolve, reject) => {
      db.query(queryStr, [id], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  showDetailSeller: (id) => {
    let queryStr = "SELECT * FROM seller WHERE seller.id = ?";
    return new Promise((resolve, reject) => {
      db.query(queryStr, [id], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  updateCustomer: (id, body) => {
    return new Promise((resolve, reject) => {
      const queryStr = `UPDATE customer SET ? WHERE customer.id = ${id}`;
      db.query(queryStr, body, (err, data) => {
        if (!err) {
          console.log(data);
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  updateSeller: (id, body) => {
    return new Promise((resolve, reject) => {
      const queryStr = `UPDATE seller SET ? WHERE seller.id = ${id}`;
      db.query(queryStr, body, (err, data) => {
        if (!err) {
          console.log(data);
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  resetPassCustomer: (body) => {
    return new Promise((resolve, reject) => {
      if (body.newPassword !== undefined) {
        bcrypt.genSalt(10, (error, salt) => {
          if (error) {
            reject(error);
          }
          const { password } = body;
          bcrypt.hash(password, salt, (error, hashedPassword) => {
            if (error) {
              reject(error);
            }
            const newBody = { ...body, password: hashedPassword };
            const qs = `UPDATE customer SET ? WHERE customer.email ='${newBody.email}'`;
            db.query(qs, newBody, (error) => {
              if (!error) {
                resolve({
                  msg: "Reset Password Success",
                });
              } else {
                reject({
                  msg: "Unknown Error",
                });
              }
            });
          });
        });
      } else if (body.email !== undefined) {
        const checkEmailQuery = "SELECT name FROM customer WHERE email=?;";
        db.query(checkEmailQuery, [body.email], (err, res) => {
          if (err) {
            reject({ msg: "Server error" });
          }
          if (res.length === 0) {
            reject({ msg: "Email Not Found" });
          } else {
            const encryptedEmail = cryptoJS.AES.encrypt(
              body.email,
              process.env.RESET_PASSWORD_KEY
            ).toString();
            const mailOptions = {
              from: "a.zaky32@gmail.com",
              to: body.email,
              subject: "Reset Password",
              html: `<p>here is your reset password link. please open it in your phone and keep it secret!.\n</p><p>zwalletapp://ResetPassword/${body.email}</p>`,
            };
            // console.log(encryptedEmail);
            transporter.sendMail(mailOptions, (error) => {
              if (error) {
                reject({ msg: "Connection error." });
                console.log(error);
              } else {
                resolve({
                  msg: "Reset password link sent. Please check your email.",
                });
              }
            });
          }
        });
      }
    });
  },
  resetPassSeller: (id, body) => {
    return new Promise((resolve, reject) => {
      if (body.newPassword !== undefined) {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(body.newPassword, salt, (err, hashedPassword) => {
            if (err) {
              reject({
                msg: "unknown error",
              });
            }
            const newPasswordQuery = "UPDATE seller SET ? WHERE email = ?;";
            db.query(
              newPasswordQuery,
              [
                {
                  password: hashedPassword,
                },
                body.email,
              ],
              (err) => {
                if (err) {
                  reject({
                    msg: "Unknown Error",
                  });
                }
                resolve({
                  msg: "Reset password success",
                });
              }
            );
          });
        });
      } else if (body.email !== undefined) {
        const checkEmailQuery = "SELECT name FROM seller WHERE email=?;";
        db.query(checkEmailQuery, [body.email], (err, res) => {
          if (err) {
            reject({ msg: "Server error" });
          }
          if (res.length === 0) {
            reject({ msg: "Email Not Found" });
          } else {
            const encryptedEmail = cryptoJS.AES.encrypt(
              body.email,
              process.env.RESET_PASSWORD_KEY
            ).toString();
            const mailOptions = {
              from: "a.zaky32@gmail.com",
              to: body.email,
              subject: "Reset Password",
              html: `<p>here is your reset password link. please open it in your phone and keep it secret!.\n</p><p>zwalletapp://ResetPassword/${body.email}</p>`,
            };
            // console.log(encryptedEmail);
            transporter.sendMail(mailOptions, (error) => {
              if (error) {
                reject({ msg: "Connection error." });
                console.log(error);
              } else {
                resolve({
                  msg: "Reset password link sent. Please check your email.",
                });
              }
            });
          }
        });
      }
    });
  },
  addAddress: (user_id, body) => {
    return new Promise((resolve, reject) => {
      const queryStr = `UPDATE address SET ? WHERE address.user_id = ${user_id}`;
      db.query(queryStr, body, (err, data) => {
        if (!err) {
          console.log(data);
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};

module.exports = userModel;
