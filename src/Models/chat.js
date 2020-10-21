const { dbObj } = require("../Configs/mongoDB");
const { isEmpty } = require("underscore");

const chatModel = {
	syncWithLocal: (body) => {
		const query = { _id: body.id };
		const newObj = { $set: { chat: body.messages } };
		const obj = { _id: body.id, chat: body.messages };
		return new Promise((resolve, reject) => {
			dbObj
				.collection("chat")
				.find({ _id: body.id })
				.toArray(function (err, res) {
					if (err) reject(err);
					if (isEmpty(res)) {
						dbObj.collection("chat").insertOne(obj, (err) => {
							if (err) reject(err);
							resolve("chat synchronization success");
						});
					} else {
						dbObj
							.collection("chat")
							.updateOne(query, newObj, (err) => {
								if (err) reject(err);
								resolve("chat synchronization success");
							});
					}
				});
		});
	},
	syncFromServer: (body) => {
		return new Promise((resolve, reject) => {
			dbObj
				.collection("chat")
				.find({ _id: body.id })
				.toArray((err, res) => {
					if (err) reject("connection error");
					if (isEmpty(res)) {
						reject("no chat history");
					}
					resolve(...res);
				});
		});
	},
};

module.exports = chatModel;
