const db = require("../Configs/dbMysql");

const userModel = {
  showDetailUser: (id) => {
    let queryStr = `${selectQuery} WHERE customer.id = ?`;
    return new Promise((resolve, reject) => {
      connection.query(queryStr, [id], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  updateUser: (id, body) => {
    return new Promise((resolve, reject) => {
      const queryStr = `UPDATE customer SET ? AND customer.id = ${id}`;
      connection.query(queryStr, body, (err, data) => {
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
