const mongo = require("mongodb").MongoClient;

const uri = `mongodb://tavvfiq:${process.env.MONGODB_PASS}@cluster0-shard-00-00.sfjbe.mongodb.net:27017,cluster0-shard-00-01.sfjbe.mongodb.net:27017,cluster0-shard-00-02.sfjbe.mongodb.net:27017/${process.env.MONGODB_NAME}?ssl=true&replicaSet=atlas-5lfilj-shard-0&authSource=admin&retryWrites=true`;
const mongoClient = new mongo(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

try {
	mongoClient.connect((err) => {
		if (err) throw err;
		// const collection = client.db(process.env.MONGODB_NAME).collection('chat');
		console.log(`MongoDB connected!`);
	});
} catch (err) {
	console.log(
		"env not yet setted for mongoDB. please contact administrator."
	);
}

const dbObj = mongoClient.db(process.env.MONGODB_NAME);

module.exports = { mongoClient, dbObj };
