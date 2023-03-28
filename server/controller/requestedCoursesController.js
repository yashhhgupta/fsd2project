const RequestedCourses = require("../model/RequestedCourses");

exports.getRequestedCourses = (req, res, next) => {
  //contains all the courses
  RequestedCourses.find()
    .then((requestedcourses) => {
      res.status(200).json(requestedcourses);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.saveRequestedCourses = (req, res, next) => {
  console.log(req.body);
  const requestedcourse = new RequestedCourses({
    name: req.body.name,
    email: req.body.email,
    title: req.body.title,
    text: req.body.text,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
  });
  requestedcourse
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
};
