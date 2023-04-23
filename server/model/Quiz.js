const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    courseId:{
        type: String,
        required: true,
    },
  question: {
    type: String,
    required: true,
  },
    answerOptions: [
    {
        answerText: {
            type: String,
            required: true,
        },
        isCorrect: {
            type: Boolean,
            required: true,
        },
    },
    ]
});

module.exports = mongoose.model("Quiz", quizSchema);
