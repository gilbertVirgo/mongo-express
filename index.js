require("dotenv").config();

const express = require("express");
const { default: mongoose } = require("mongoose");
const success = require("./middleware/success");
const error = require("./middleware/error");
const server = express();
const entry = require("./router/entry");
const entries = require("./router/entries");

const { PORT, MONGO_PASSWORD } = process.env;

mongoose.set("strictQuery", true); // Supress that warning

const init = async () => {
	await mongoose.connect(
		`mongodb+srv://gilbert:${MONGO_PASSWORD}@mongo-express.huv4u.mongodb.net/diary?retryWrites=true&w=majority`
	);

	server.use(express.json());

	server.use("/entries", entries);
	server.use("/entry", entry);

	server.use(success);
	server.use(error);

	server.listen(PORT, () => console.log(`Server started on ${PORT}`));
};

init();
