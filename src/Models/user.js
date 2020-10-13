const db = require("../Configs/dbMysql");

const userModel = {
  showDetailCustomer: (id) => {
    let queryStr = "SELECT * FROM customer WHERE customer.id = ?" ;
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
};

module.exports = userModel;
