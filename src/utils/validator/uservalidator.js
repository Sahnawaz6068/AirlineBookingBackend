const validator = require("validator");

function userSignupValidator(req) {
  const { userName, password, email} = req.body;
  if (userName == null || email == null || password == null ) {
    throw new Error("Enter every field");
  }

  if (!validator.isLength(userName, { min: 4, max: 50 })) {
    throw new Error("UserName is too small");
  }
  if (!validator.isLength(password, { min: 4, max: 50 })) {
    throw new Error(" Password is too small");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Plese make Strong password");
  }
  if (!validator.isEmail(email)) {
    throw new Error("Enter valid email formate");
  }
}
module.exports = {
  userSignupValidator,
};
