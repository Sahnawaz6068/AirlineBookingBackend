const validator = require("validator");

function airplanValidator(req) {
  const { modelNumber, capacity } = req.body;

  if (!modelNumber || !capacity) {
    throw new Error("enter modelNumber or Capacity");
  } 
  else if (!validator.isLength(modelNumber, { min: 4, max: 50 })) {
    throw new Error("Enter correct Airplan Model");
  }
  
  const numericCapacity = parseInt(capacity, 10);
  if (numericCapacity < 10 || numericCapacity > 999) {
    throw new Error("Capacity must be between 10 and 999.");
  }

}

module.exports = {
  airplanValidator,
};
