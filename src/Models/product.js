const { reject } = require("lodash");
const db = require("../Configs/dbMysql");

const productModel = {
	alignHelper: function (data) {
		let arrayOfOrder = [[]];
		let objRes = [];
		let lastElement = {};
		let orderIdx = 0;
		let dataLength = data.length;
		for (let i = 0; i < dataLength; i++) {
			if (i === 0) {
				arrayOfOrder[orderIdx].push(data[i].image);
				lastElement = data[i];
			} else if (data[i].id !== lastElement.id) {
				objRes[orderIdx] = [];
				objRes[orderIdx] = {
					id: lastElement.id,
					name: lastElement.name,
					seller_id: lastElement.seller_id,
					seller_name: lastElement.seller_name,
					brand: lastElement.brand,
					price: lastElement.price,
					category: lastElement.category,
					qty: lastElement.qty,
					status: lastElement.status,
					description: lastElement.description,
					added_at: lastElement.added_at,
					images: arrayOfOrder[orderIdx],
				};
				orderIdx++;
				arrayOfOrder[orderIdx] = [];
				arrayOfOrder[orderIdx].push(data[i].image);
				lastElement = data[i];
			} else {
				arrayOfOrder[orderIdx].push(data[i].image);
				lastElement = data[i];
			}
			if (i === dataLength - 1) {
				objRes[orderIdx] = {};
				objRes[orderIdx] = {
					id: lastElement.id,
					name: lastElement.name,
					seller_id: lastElement.seller_id,
					seller_name: lastElement.seller_name,
					brand: lastElement.brand,
					price: lastElement.price,
					category: lastElement.category,
					qty: lastElement.qty,
					status: lastElement.status,
					description: lastElement.description,
					added_at: lastElement.added_at,
					images: arrayOfOrder[orderIdx],
				};
			}
		}
		return objRes;
	},
	getProduct: function (query) {
		const { name, category, brand, page, limit } = query;
		let qCategory = "";
		if (category) {
			qCategory = `AND product.category_id = ${category}`;
		}
		const offset = (Number(page) - 1) * Number(limit);
		const queryString = `SELECT product.id, product.name, product_img.img as image, seller_id,seller.name as seller_name, brand, price,category.category,qty,status,description,added_at FROM product JOIN product_img ON product_img.product_id = product.id JOIN seller ON seller.id = product.seller_id JOIN category ON product.category_id = category.category_id WHERE product.name LIKE '%${name}%' OR product.brand LIKE '%${brand}%' ${qCategory}  LIMIT ${limit} OFFSET ${offset}`;
		return new Promise((resolve, reject) => {
			db.query(queryString, (err, data) => {
				if (err) {
					reject(err);
				}
				resolve(this.alignHelper(data));
			});
		});
	},
	getProductById: function (id) {
		const queryString =
			"SELECT product.id, product.name, product_img.img as image, seller_id,seller.name as seller_name, brand, price,category.category,qty,status,description,added_at FROM product JOIN product_img ON product_img.product_id = product.id JOIN seller ON seller.id = product.seller_id JOIN category ON product.category_id = category.category_id WHERE product.id=?";
		return new Promise((resolve, reject) => {
			db.query(queryString, [id], (err, data) => {
				if (err) {
					reject(err);
				}
				resolve(...this.alignHelper(data));
			});
		});
	},
	addNewProduct: function (body) {
		const { img, ...product_body } = body;
		const product_img = img
			.split(",")
			.map((image) => {
				return [`(LAST_INSERT_ID(), "${image}")`];
			})
			.join(",");
		const queryString = `INSERT INTO product SET ?; INSERT INTO product_img (product_id, img) VALUES ${product_img};`;
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
	updateProduct: function (id, body) {
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
	deleteProduct: function (id) {
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
