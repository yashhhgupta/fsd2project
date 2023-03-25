const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
  description: {
    type: String,
  },
  creator: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  contentList: [String],
});

module.exports = mongoose.model("Course", courseSchema);
