const router = require('express').Router();
const userController = require('../controller/userController');
const courseController = require('../controller/courseController');
const requestedCoursesController = require('../controller/requestedCoursesController');
const feedbackController = require('../controller/feedbackController');

router.get('/users', userController.getUsers)

router.get('/users/:email', userController.getSpecificUsers)

router.post('/users', userController.saveUsers)

router.get('/courses/:id', courseController.getSpecificCourse)
router.get('/courses', courseController.getCourse)

router.post('/courses', courseController.saveCourse)

router.get('/requestedcourse/:id', requestedCoursesController.getRequestedCourses)

router.post('/requestedcourse', requestedCoursesController.saveRequestedCourses)

router.get('/feedback/:id', feedbackController.getFeedback)

router.post('/feedback', feedbackController.saveFeedback)

module.exports = router