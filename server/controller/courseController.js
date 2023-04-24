const Course = require('../model/Courses');
const redis = require("redis");
const client = redis.createClient();

client.connect();


//change above code with redis
exports.gtCourse= async (req, res, next) => {
    
    const courses = await client.get("courses");
        if (courses) {
            // console.log("courses from redis",courses);
            res.status(200).json({
                message: 'Courses fetched successfully',
                courses: JSON.parse(courses),
            });
            // console.log("courses from redis",courses);
        } else {
            Course.find()
                .then((courses) => {
                    client.setEx("courses", 3600, JSON.stringify(courses));
                    res.status(200).json({
                        message: 'Courses fetched successfully',
                        courses: courses,
                    });
                })
    
        }
}

exports.getSpecifcCourse = async (req, res, next) => {
    const id = req.params.id;
    const course = await client.get(`${id}`);
        if (course) {
            // console.log("courses from redis",courses);
            res.status(200).json({
                message: 'Course fetched successfully',
                courses: JSON.parse(course),
            });
            // console.log("courses from redis",courses);
        } else {
    Course.findById(id)
        .then((course) => {
            client.setEx(`${id}`, 3600, JSON.stringify(course));
            res.status(200).json({
                message: 'Course fetched successfully',
                course: course,
            });
        })  
    }
}

exports.getCourse = (req, res, next) => {
  Course.find().then((courses) => {
    res.status(200).json({
      message: "Courses fetched successfully",
      courses: courses,
    });
  });
};

exports.getSpecificCourse = (req, res, next) => {
  const id = req.params.id;
  Course.findById(id).then((course) => {
    res.status(200).json({
      message: "Course fetched successfully",
      course: course,
    });
  });
};

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