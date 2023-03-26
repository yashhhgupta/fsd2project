const router = require('express').Router();
const userController = require('../controller/userController');
const courseController = require('../controller/courseController');
const requestedCoursesController = require('../controller/requestedCoursesController');
const feedbackController = require('../controller/feedbackController');

router.get('/users', userController.getUsers)

router.post('/users', userController.saveUsers)

router.get('/course/:id', courseController.getCourse)

router.post('/course', courseController.saveCourse)

router.get('/requestedcourse/:id', requestedCoursesController.getRequestedCourses)

router.post('/requestedcourse', requestedCoursesController.saveRequestedCourses)

router.get('/feedback/:id', feedbackController.getFeedback)

router.post('/feedback', feedbackController.saveFeedback)

module.exports = router