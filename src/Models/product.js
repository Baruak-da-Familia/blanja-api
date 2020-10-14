const db = require("../Configs/dbMysql");

const productModel = {
  addNewProduct: (body) => {
    const { img, ...product_body } = body;
    const product_img = img.split(",").map((image) => {
      return [`(LAST_INSERT_ID(), "${image}")`];
    }).join(',');
    const queryString =
      `INSERT INTO product SET ?; INSERT INTO product_img (product_id, img) VALUES ${product_img};`;
    return new Promise((resolve, reject) => {
      db.query(queryString, [product_body], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  updateProduct: (id, body) => {
    return new Promise((resolve, reject) => {
      const queryStr = `UPDATE product SET ? WHERE product.id = ${id}`;
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
  deleteProduct: (id) => {
    return new Promise((resolve, reject) => {
      const queryString = `DELETE FROM product WHERE id = ${id}`;
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};

module.exports = productModel;
