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
        courses: req.body.courses,
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