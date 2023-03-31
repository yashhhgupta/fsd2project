const router = require('express').Router();
const userController = require('../controller/userController');
const courseController = require('../controller/courseController');
const requestedCoursesController = require('../controller/requestedCoursesController');
const feedbackController = require('../controller/feedbackController');
const path =require('path')
const multer = require('multer');
const upload = multer({ dest: '../uploads/' });

router.get('/users', userController.getUsers)
router.get('/users/:email', userController.getSpecificUsers)
router.post('/users', userController.saveUsers)
router.post('/getUser', userController.getUserbyId)
router.delete('/deleteUser/:id', userController.deleteUser)
router.post('/addCourse', userController.addCourse)
router.post('/updateUserDetails', userController.updateUserDetails)

router.get('/courses/:id', courseController.getSpecificCourse)
router.delete('/courses/:id', courseController.deleteCourse)
router.get('/courses', courseController.getCourse)
router.post('/courses', courseController.saveCourse)

router.get('/requestedCourses', requestedCoursesController.getRequestedCourses)
router.post('/requestedCourses',upload.single('course_img'), requestedCoursesController.saveRequestedCourses)

router.get('/feedbacks', feedbackController.getFeedback)
router.post('/feedbacks', feedbackController.saveFeedback)

router.get('/:file(*)',(req,res)=>{
    let file = req.params.file;
  console.log(req)

  let fileLocation = path.join(__dirname,'../../uploads', file);
  console.log(fileLocation)
//   res.send({image: fileLocation});
  res.sendFile(`${fileLocation}`)
  // console.log(fileLocation)
//   res.send(file)
}
)

router.put('/:file(*)',(req,res)=>{
    let file = req.params.file;
  console.log(req)

  let fileLocation = path.join(__dirname,'../../uploads', file);
  console.log(fileLocation)
//   res.send({image: fileLocation});
  res.sendFile(`${fileLocation}`)
  // console.log(fileLocation)
//   res.send(file)
}
)

module.exports = router