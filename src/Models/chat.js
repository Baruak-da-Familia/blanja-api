const { dbObj } = require("../Configs/mongoDB");
const { isEmpty } = require("underscore");

const chatModel = {
	syncWithLocal: (body) => {
		const { messages } = body;
		const query = {
			_id: Number(messages.user1.id) + Number(messages.user2.id),
		};
		const newObj = { $set: { chat: body.messages } };
		const obj = {
			_id: Number(messages.user1.id) + Number(messages.user2.id),
			chat: messages,
		};
		return new Promise((resolve, reject) => {
			dbObj
				.collection("chat")
				.find(query)
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
	syncFromServer: (id) => {
		return new Promise((resolve, reject) => {
			dbObj
				.collection("chat")
				.find({
					$or: [
						{
							"chat.user1.id": Number(id),
						},
						{
							"chat.user2.id": Number(id),
						},
					],
				})
				.project({ _id: 0 })
				.toArray((err, res) => {
					if (err) reject(err);
					if (isEmpty(res)) {
						resolve([]);
					}
					resolve(
						res.map((item) => {
							return item.chat;
						})
					);
					// resolve(res);
				});
		});
	},
};

module.exports = chatModel;
