const { default: mongoose, Schema } = require("mongoose");

module.exports = mongoose.model(
	"Entry",
	new Schema({
		title: String,
		content: String,
		audioURL: String,
		videoURL: String,
	})
);
