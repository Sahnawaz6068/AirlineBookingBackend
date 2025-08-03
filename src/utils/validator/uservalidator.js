const validator = require("validator");

function userSignupValidator(req) {
  console.log(
    "gvdhfjklsa;sdksjfbhgdfkdfhdgfjkdjsfdbfj-------------------------"
  );
  const { userName, password, email, id } = req.body;
  if (userName == null || email == null || password == null || id == null) {
    throw new Error("Enter every field");
  }
  if (!validator.isInt(id.toString())) {
    throw new Error("ID must be a valid integer.");
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
console.log("End ofllllllllllllllllllllllllllllllllllllll")
module.exports = {
  userSignupValidator,
};
