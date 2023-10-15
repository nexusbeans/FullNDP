const mongoose = require("mongoose");

const employeeDataItemsSchema = {
  namereg: String,
  emailreg: String,
  phonereg: String,
  active: String,
};

const employeeDataItems = mongoose.model(
  "employeeDataItems",
  employeeDataItemsSchema
);
module.exports = employeeDataItems;
