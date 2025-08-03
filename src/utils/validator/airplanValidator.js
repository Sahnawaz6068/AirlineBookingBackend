const validator = require("validator");

function airplanValidator(req) {
  const { modelNumber, capacity } = req.body;
  if (!modelNumber || !capacity) {
    throw new Error("enter modelNumber or Capacity");
  } else if (!validator.isLength(modelNumber, { min: 4, max: 50 })) {
    throw new Error("Enter correct Airplan Model");
  }
  if (!validator.isInt(capacity)) {
    throw new Error("Enter Correct form");
  } else {
    if (!validator.isLength(capacity, { min: 2, max: 3 })) {
      throw new Error("Enter valid capacity");
    }
  }
}

module.exports = {
  airplanValidator,
};
