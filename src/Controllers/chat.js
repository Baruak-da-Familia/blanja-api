const formResponse = require("../Helpers/Forms/formResponse");
const chatModel = require("../Models/chat");

const chatController = {
	syncWithLocal: (req, res) => {
		chatModel
			.syncWithLocal(req.body)
			.then((data) => {
				formResponse.success(res, data);
			})
			.catch((err) => {
				formResponse.error(res, err);
			});
	},
	syncFromServer: (req, res) => {
		chatModel
			.syncFromServer(req.params.id)
			.then((data) => {
				formResponse.success(res, data);
			})
			.catch((err) => {
				formResponse.error(res, err);
			});
	},
};

module.exports = chatController;
