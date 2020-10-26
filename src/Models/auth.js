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
              const qs = `START TRANSACTION; INSERT INTO customer SET ?; INSERT INTO address SET user_id = LAST_INSERT_ID(); SELECT id, name, avatar, phone_number, gender, dob FROM customer WHERE customer.email=?; COMMIT;`;
              db.query(qs, [newBody, body.email], (err, data) => {
                if (err) {
                  reject({ msg: "User Already Exist" });
                } else {
                  const {
                    id,
                    avatar,
                    phone_number,
                    gender,
                    dob,
                  } = data[3][0];
                  const { name, email } = body;
                  const payload = {
                    id,
                    email,
                  };
                  const user_type = "Customer";
                  const token = jwt.sign(payload, process.env.SECRET_KEY);
                  resolve({
                    msg: "Register Success",
                    id,
                    name,
                    email,
                    avatar,
                    phone_number,
                    gender,
                    dob,
                    save_address:null,
                    recipient_name:null,
                    address:null,
                    city_of_subdistrict:null,
                    recipient_telp_number:null,
                    postal_code:null,
                    user_type,
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
                  const { insertId, avatar = null, store_desc = null } = data;
                  const { email, name, phone_number, store_name } = body;
                  const payload = {
                    id: insertId,
                    email,
                  };
                  const user_type = "Seller";
                  const token = jwt.sign(payload, process.env.SECRET_KEY);
                  resolve({
                    msg: "Register Success",
                    id: insertId,
                    name,
                    email,
                    phone_number,
                    store_name,
                    avatar:null,
                    store_desc:null,
                    user_type,
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
        "SELECT customer.id, customer.name, customer.email, customer.password, customer.avatar, customer.phone_number, customer.gender, customer.dob, address.save_address, address.recipient_name, address.address, address.city_of_subdistrict, address.recipient_telp_number, address.postal_code FROM customer JOIN address ON customer.id = address.user_id WHERE email=?";
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
                  avatar,
                  phone_number,
                  gender,
                  dob,
                  save_address,
                  recipient_name,
                  address,
                  city_of_subdistrict,
                  recipient_telp_number,
                  postal_code,
                } = data[0];
                const { email } = body;
                const payload = {
                  id,
                  email,
                };
                const token = jwt.sign(payload, process.env.SECRET_KEY);
                const msg = "Login Success";
                const user_type = "Customer";
                resolve({
                  msg,
                  id,
                  name,
                  email,
                  avatar,
                  phone_number,
                  gender,
                  dob,
                  save_address,
                  recipient_name,
                  address,
                  city_of_subdistrict,
                  recipient_telp_number,
                  postal_code,
                  user_type,
                  token,
                });
              } else {
                reject(error);
              }
            });
          } else {
            const msg = "Invalid email or password";
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
      const qs = "SELECT * FROM seller WHERE email=?";
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
                const user_type = "Seller";
                resolve({
                  msg,
                  id,
                  name,
                  email,
                  phone_number,
                  store_name,
                  avatar,
                  store_desc,
                  user_type,
                  token,
                });
              } else {
                reject(error);
              }
            });
          } else {
            const msg = "Invalid email or password";
            reject({ msg, err });
          }
        } else {
          reject(err);
        }
      });
    });
  },
  sendEmailCustomer: (body) => {
    return new Promise((resolve, reject) => {
      const queryString = "SELECT id, email FROM customer WHERE email = ?";
      db.query(queryString, [body.email], (err, data) => {
        if (err) {
          reject(err);
        }
        if (data.length) {
          const link = `http://localhost:3000/ResetPasswordCustomer?id_user=${data[0].id}`
          resolve({ email: data[0].email, link: link })
        } else {
          reject({ msg: 'data not found' });
        }
      });
    });
  },
  sendEmailSeller: (body) => {
    return new Promise((resolve, reject) => {
      const queryString = "SELECT id, email FROM seller WHERE email = ?";
      db.query(queryString, [body.email], (err, data) => {
        if (err) {
          reject(err);
        }
        if (data.length) {
          const link = `http://localhost:3000/ResetPasswordSeller?id_user=${data[0].id}`
          resolve({ email: data[0].email, link: link })
        } else {
          reject({ msg: 'data not found' });
        }
      });
    });
  },
  resetPasswordCustomer: (body) => {
    return new Promise((resolve, reject) => {
      const qs = "SELECT email FROM customer WHERE id = ?";
      db.query(qs, [body.id], (err, data) => {
        if (data.length) {
          bcrypt.genSalt(10, (err, salt) => {
            if (err) {
              reject(err);
            }
            const { password, id } = body;
            bcrypt.hash(password, salt, (err, hashedPassword) => {
              if (err) {
                reject(err);
              }
              const queryString =
                "UPDATE customer SET password= ? WHERE id = ?";
              db.query(queryString, [hashedPassword, id], (err, data) => {
                if (!err) {
                  resolve({ msg: "change password success" });
                } else {
                  reject(err);
                }
              });
            });
          });
        } else {
          reject({ msg: 'user not found' });
        }
      });
    });
  },
  resetPasswordSeller: (body) => {
    return new Promise((resolve, reject) => {
      const qs = "SELECT email FROM seller WHERE id = ?";
      db.query(qs, [body.id], (err, data) => {
        if (data.length) {
          bcrypt.genSalt(10, (err, salt) => {
            if (err) {
              reject(err);
            }
            const { password, id } = body;
            bcrypt.hash(password, salt, (err, hashedPassword) => {
              if (err) {
                reject(err);
              }
              const queryString =
                "UPDATE seller SET password= ? WHERE id = ?";
              db.query(queryString, [hashedPassword, id], (err, data) => {
                if (!err) {
                  resolve({ msg: "change password success" });
                } else {
                  reject(err);
                }
              });
            });
          });
        } else {
          reject({ msg: 'user not found' });
        }
      });
    });
  },
};
module.exports = authModel;
