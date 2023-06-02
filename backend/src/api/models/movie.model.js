const mongoose = require("mongoose");
const schema = mongoose.Schema;
const movie = new schema({
  language: {
    type: "string",
  },
  mediaType: {
    type: "string",
  },
  data: {
    type: "array",
  },
});

module.exports = mongoose.model("movie", movie);
