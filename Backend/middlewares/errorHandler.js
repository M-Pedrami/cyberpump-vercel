const errorHandler = (err, req, res, next) => {
  console.log(err.stack);
  if (res.headersSent) {
    return next(err);
  }
  const statusCode = err.status || 500;
  const errorMessage =
    statusCode === 500 ? "Internal Server Error" : err.message;

  res.status(statusCode).json({ error: errorMessage });

  /* res.status(500).json({ error: "Something went wrong" }); */
};

module.exports = errorHandler;
