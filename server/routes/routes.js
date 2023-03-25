const router = require('express').Router();
const userController = require('../controller/userController');
const courseController = require('../controller/courseController');

router.get('/user', userController.getUsers)

router.post('/user', userController.saveUsers)

router.get('/course/:id', courseController.getCourse)

router.post('/course', courseController.saveCourse)

module.exports = router