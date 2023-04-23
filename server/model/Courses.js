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
  },
  rating :{
    type: Number,
  },
  imageUrl: {
    type: String,
  },
  contentList: [String],
});

module.exports = mongoose.model("Course", courseSchema);
