const express = require("express");
const Entry = require("../models/Entry");
const router = express.Router();

router.get("/:id", async ({ params: { id } }, res, next) => {
	const doc = await Entry.findById(id).catch(next);
	res.locals.data = doc;
	next();
});
router.put("/", async ({ body }, res, next) => {
	const ret = await Entry.create(body).catch(next);
	res.locals.data = ret;
	next();
});
router.patch("/:id", async ({ params: { id }, body }, res, next) => {
	const ret = await Entry.findByIdAndUpdate(id, body).catch(next);
	res.locals.data = ret;
	next();
});
router.delete("/:id", async ({ params: { id }, body }, res, next) => {
	const ret = await Entry.findByIdAndDelete(id).catch(next);
	res.locals.data = ret;
	next();
});

module.exports = router;
