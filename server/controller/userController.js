const User = require("../model/User");

exports.getUsers = (req, res, next) => {
  User.find()
    .then((users) => {
      res.status(200).json({
        message: "Users fetched successfully",
        users: users,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.saveUsers = (req, res, next) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        mycourses: req.body.mycourses,
    });
    user
        .save()
        .then((result) => {
        res.status(200).json({
            message: "User created successfully",
            user: result,
        });
        })
        .catch((err) => {
        console.log(err);
        });
}

exports.getSpecificUsers = (req, res, next) => {
  const email = req.params.email;
  User.findOne({ email: email }).then((user) => {
    res.status(200).json({
      message: "User fetched successfully",
      users: user,
    });
  });
}

exports.getUserbyId =(req, res, next) => {
  const id = req.body.id;
  // console.log(id);
  User.findById(id).then((user) => {
    res.status(200).json({
      message: "User fetched successfully",
      users: user,
    });
  });
}

exports.addCourse = (req, res, next) => {
  const {id, course} = req.body;

  User.findById(id).then((user) => {
    if(user){
      user.mycourses.push(course);
      user.save().then((result) => {
        res.status(200).json({
          message: "Course added successfully",
          user: result,
        });
      });
    }
  });
}

exports.deleteUser = (req, res, next) => {
  const id = req.params.id;
  User.findByIdAndRemove(id).then((user) => {
    res.status(200).json({
      message: "User deleted successfully",
      users: user,
    });
  });
}

//update user details
exports.updateUserDetails = (req, res, next) => {
  //write a post request to update user details
  const { id,  phone,address } = req.body;
  // console.log(id, username, email, phone,address);
  User.findById(id).then((user) => {
    if (user) {
      user.phone = phone;
      user.address = address;
      user.save().then((result) => {
        res.status(200).json({
          message: "User details updated successfully",
          user: result,
        });
      });
    }
  });
}