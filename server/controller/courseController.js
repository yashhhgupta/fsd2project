const Course = require('../model/Courses');

exports.getCourse= (req, res, next) => {
    Course.find()
        .then((courses) => {
            res.status(200).json({
                message: 'Courses fetched successfully',
                courses: courses,
            });
        })
}

exports.getSpecificCourse = (req, res, next) => {
    const id = req.params.id;
    Course.findById(id)
        .then((course) => {
            res.status(200).json({
                message: 'Course fetched successfully',
                course: course,
            });
        })  
}

exports.saveCourse = (req, res, next) => {
    console.log(req.body);
    const course = new Course({
        title: req.body.title,
        text: req.body.text,
        description: req.body.description,
        creator: req.body.creator,
        imageUrl: req.body.imageUrl,
        contentList: req.body.contentList,
    });
    course
        .save()
        .then((result) => {
        res.status(200).json({
            message: "Course created successfully",
            course: result,
        });
        })
        .catch((err) => {
        console.log(err);
        });
}

exports.deleteCourse = (req, res, next) => {
    const id = req.params.id;
    Course.findByIdAndRemove(id)
        .then((result) => {
            res.status(200).json({
                message: "Course deleted successfully",
                course: result,
            });
        })
        .catch((err) => {
            console.log(err);
        });
}