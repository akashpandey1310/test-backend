const db = require("../model");
const User = db.user;

//logic to check if user is allready registered with same emailID
checkDuplicateEmail = (req, res, next) => {
    // Email
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!"
        });
        return;
      }

      next();
    });
};


const verifySignup = {
  checkDuplicateEmail: checkDuplicateEmail,
};

module.exports = verifySignup;