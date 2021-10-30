const mongoose = require("mongoose");

const validator = require("validator");

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      function() {
        return "invalid email format";
      },
    },
  },
  mobile: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: "Department",
  },
  createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      // required: true
    },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
