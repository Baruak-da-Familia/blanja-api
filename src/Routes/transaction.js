const { express } = require("../../sharedVariable");

const transactionController = require("../Controllers/transaction");

const transactionRouter = express.Router();

//add transaction
transactionRouter.post("/", transactionController.addTransaction);
transactionRouter.get(
	"/customer/:id",
	transactionController.getTransactionCustomer
);
transactionRouter.get(
	"/seller/:id",
	transactionController.getTransactionSeller
);
// transactionRouter.post("/order", transactionController.addOrder);

module.exports = transactionRouter;
