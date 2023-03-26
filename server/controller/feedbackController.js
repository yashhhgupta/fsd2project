const Feedback = require('../model/Feedback');

exports.getFeedback = (req, res, next) => {

    Feedback.find()
        .then((feedback) => {
            res.status(200).json({
                message: 'Feedback fetched successfully',
                feedback: feedback,
            });
        })
        .catch((err) => {
            console.log(err);
        });
}

exports.saveFeedback = (req, res, next) => {

    const feedback = new Feedback({
        name: req.body.name,
        courseid: req.body.courseid,
        review: req.body.review,
    });
    feedback
        .save()
        .then((result) => {
        res.status(200).json({
            message: "Feedback created successfully",
            feedback: result,
        });
        })
        .catch((err) => {
        console.log(err);
        });
}

