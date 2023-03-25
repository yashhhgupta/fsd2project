const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
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
  imageUrl: {
    type: String,
  }
});

module.exports = mongoose.model("RequestedCourses", courseSchema);
