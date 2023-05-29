const mongoose = require("mongoose");

const connectToMongoose = async (uri) => {
  try {
    const result = await mongoose.connect(uri);
    if (result) {
      console.log(`mongoose is connected`);
    }
  } catch (error) {
    throw error;
  }
};

module.exports = connectToMongoose;
