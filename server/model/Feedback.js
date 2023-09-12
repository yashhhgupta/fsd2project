const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  name: {
    type: String,
  },
  courseid: {
    type: String,
  },
  review: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Feedback", feedbackSchema);
