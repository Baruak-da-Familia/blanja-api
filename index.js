require("dotenv").config();

const bodyParser = require("body-parser");
const logger = require("morgan");
const indexRouter = require("./src/Routes/index");
const cors = require("cors");
const { io, app, http, express } = require("./sharedVariable");

app.listen(process.env.PORT, () => {
	console.log(`Server is Running at ${process.env.PORT}`);
});

http.listen(process.env.SOCKET_PORT, () => {
	console.log(`Socket is Running at ${process.env.SOCKET_PORT}`);
});

io.on("connection", (socket) => {
	const id = socket.handshake.query.id;
	console.log("New User Connected", id);
	socket.join(id);
	socket.on(
		"message",
		({ senderId, receiverId, name, avatar, message, time }) => {
			socket.broadcast
				.to(receiverId)
				.emit("message", { senderId, name, avatar, message, time });
		}
	);
	socket.on("disconnect", () => {
		console.log(`user ${id} was disconnected`);
	});
});

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

app.use(indexRouter);
