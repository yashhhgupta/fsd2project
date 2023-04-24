const Quiz = require("../model/Quiz");
const redis = require("redis");
const client = redis.createClient({
  url: "rediss://red-ch3e18tgk4qarqmmtab0:guB3BUHCgHHQ5sfqAgimHucC3pDiaePq@oregon-redis.render.com:6379",
});

client.connect();
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
exports.getSpecificQuiz = async(req, res, next) => {
    const quiz = await client.get(`quiz_${req.params.courseId}`);
    if (quiz) {
        // console.log("courses from redis",courses);
        res.status(200).json({
            message: 'Quiz fetched successfully',
            quiz: JSON.parse(quiz),
        });
        // console.log("courses from redis",courses);
    }
    else {
    Quiz.find({ courseId: req.params.courseId })
        .then((quiz) => {
            client.setEx(`quiz_${req.params.courseId}`, 3600, JSON.stringify(quiz));
            res.status(200).json({
                message: 'Quiz fetched successfully',
                quiz: quiz,
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }
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