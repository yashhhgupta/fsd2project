const router = require('express').Router();
const userController = require('../controller/userController');
const courseController = require('../controller/courseController');
const requestedCoursesController = require('../controller/requestedCoursesController');

router.get('/user', userController.getUsers)

router.post('/user', userController.saveUsers)

router.get('/course/:id', courseController.getCourse)

router.post('/course', courseController.saveCourse)

router.get('/requestedcourse/:id', requestedCoursesController.getRequestedCourses)

router.post('/requestedcourse', requestedCoursesController.saveRequestedCourses)

module.exports = router