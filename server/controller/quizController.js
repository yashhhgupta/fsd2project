const Quiz = require("../model/Quiz");

exports.saveQuiz = (req, res, next) => {
    // console.log(req.body);
    const quiz = new Quiz({
        courseId: req.body.courseId,
        question: req.body.question,
        answerOptions: req.body.answerOptions,
    });
    quiz
        .save()
        .then((result) => {
        res.status(200).json({
            message: "Quiz created successfully",
            quiz: result,
        });
        })
        .catch((err) => {
        console.log(err);
        });
}

//search by courseId
exports.getSpecificQuiz = (req, res, next) => {
    Quiz.find({ courseId: req.params.courseId })
        .then((quiz) => {
            res.status(200).json({
                message: 'Quiz fetched successfully',
                quiz: quiz,
            });
        })
        .catch((err) => {
            console.log(err);
        });
}

exports.getQuiz = (req, res, next) => {
    Quiz.find()
        .then((quizzes) => {
            res.status(200).json({
                message: 'Quizzes fetched successfully',
                quizzes: quizzes,
            });
        })
}