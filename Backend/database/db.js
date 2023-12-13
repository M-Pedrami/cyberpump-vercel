const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      `Backend Connected to Database : ${connect.connection.name}`.bgMagenta
    );
  } catch (error) {
    console.log({ message: "ERROR FROM DATABASE", data: error });
  }
};

module.exports = connectDB;
