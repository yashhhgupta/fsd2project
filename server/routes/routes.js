const router = require('express').Router();
const userController = require('../controller/userController');
const courseController = require('../controller/courseController');
const requestedCoursesController = require('../controller/requestedCoursesController');
const feedbackController = require('../controller/feedbackController');

router.get('/users', userController.getUsers)

router.get('/users/:email', userController.getSpecificUsers)

router.post('/users', userController.saveUsers)
router.post('/getUser', userController.getUserbyId)
router.post('/addCourse', userController.addCourse)

router.get('/courses/:id', courseController.getSpecificCourse)
router.get('/courses', courseController.getCourse)
router.post('/courses', courseController.saveCourse)

router.get('/requestedCourses', requestedCoursesController.getRequestedCourses)

router.post('/requestedCourses', requestedCoursesController.saveRequestedCourses)

router.get('/feedbacks', feedbackController.getFeedback)

router.post('/feedbacks', feedbackController.saveFeedback)

module.exports = router