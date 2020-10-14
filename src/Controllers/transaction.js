const transactionModel = require("../Models/transaction");
const responseForm = require("../Helpers/Forms/formResponse");

const transactionController = {
	addTransaction: function (req, res) {
		transactionModel
			.addTransaction(req.body)
			.then((data) => {
				console.log(data);
				const responseObj = {
					msg: "Transaction success",
					...req.body,
				};
				responseForm.success(res, responseObj, 201);
			})
			.catch((err) => {
				console.log(err);
				responseForm.error(res, err, 500);
			});
	},
	getTransactionCustomer: function (req, res) {
		// console.log(req.params.id);
		transactionModel
			.getTransactionCustomer(req.params.id)
			.then((data) => {
				responseForm.success(res, data);
			})
			.catch((err) => {
				responseForm.error(res, err);
			});
	},
	getTransactionSeller: function (req, res) {
		// console.log(req.params.id);
		transactionModel
			.getTransactionSeller(req.params.id)
			.then((data) => {
				responseForm.success(res, data);
			})
			.catch((err) => {
				responseForm.error(res, err);
			});
	},
	addOrder: function (req, res) {
		transactionModel
			.addOrder(req.body)
			.then((data) => {
				console.log(data);
				const responseObj = {
					msg: "Order success",
					...req.body,
				};
				responseForm.success(res, responseObj, 201);
			})
			.catch((err) => {
				console.log(err);
				responseForm.error(res, err, 500);
			});
	},
};

module.exports = transactionController;
