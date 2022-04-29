const conn = require('../dbConnection');

const validateUser = async (req, res, next) => {
  try {
    var validateUser = "SELECT * FROM home_user WHERE user_email = ?";
    let {
      body: { user_email },
    } = req;

    conn.query(validateUser, [user_email], (err, result) => {
      if (err) res.send({ err: err });
      else if (result.length > 0) {
        res.send({ message: "Exists!!" });
      } else {
        next();
      }
    });
  } catch (error) {
    res.send({ err: error });
  }
};

module.exports = validateUser;