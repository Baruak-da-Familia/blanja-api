const { express } = require("../../sharedVariable");
const chatRouter = express.Router();
const chatController = require("../Controllers/chat");

chatRouter.get("/:id",chatController.syncFromServer);
chatRouter.patch("/",chatController.syncWithLocal);

module.exports = chatRouter;