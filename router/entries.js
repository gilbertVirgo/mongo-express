const express = require("express");
const Entry = require("../models/Entry");
const router = express.Router();

router.get("/", async (req, res, next) => {
	const docs = await Entry.find({}).catch(next);
	res.locals.data = docs;
	next();
});

module.exports = router;
