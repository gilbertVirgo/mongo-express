module.exports = (err, req, res, next) => {
	console.error("Server error", err);

	res.status(500).json({
		success: false,
		message: err.stack,
	});
};
