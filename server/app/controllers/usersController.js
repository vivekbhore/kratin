const User = require("../models/user");
const { body, validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const nodemailer = require("nodemailer"); 
const jwt = require("jsonwebtoken");
const { isJwtExpired } = require("jwt-check-expiration");
const Customer = require('../models/customer')

const Doctor = require("../models/doctor");
const Employee = require('../models/employee')





module.exports.register = (req, res) => {
  const body = req.body;
  const user = new User(body);
  // console.log(body);
  User.countDocuments({ email: body.email }, function (err, count) {
    if (err) {
      console.log(err);
    } else {
      if (count > 0) {
        res.json({ errors: "email already exists" });
        console.log("email already exists");
      } else {
        user
          .save()
          .then((user) => {
            const { _id, username, email } = user;
            res.json({ _id, username, email });
          })
          .catch((err) => {
            console.log(err);
            res.json({
              err: err,
              message: "please choose some other username",
            });
          });
      }
    }
  });
};

module.exports.login = (req, res) => {
  const body = req.body;
  let user;

  User.findByCredentials(body.email, body.password)
    .then((userFound) => {
      user = userFound;
      // console.log(user)
      return user.generateToken();
    })
    .then((tokentt) => {
      // console.log(tokentt)
      const { token, length, isFirstVisit } = tokentt;
      //     if(isFirstVisit)
      //     {
      //            User.findOneAndUpdate(
      //              { _id: user._id },
      //              { isFirstVisit :false},
      //              { new: true, runValidators: true }
      //            );
      //    }
      user = {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        length: length,
        isFirstVisit: isFirstVisit,
        isSelfcreated: user.isSelfcreated,
      };
      // console.log({user})
      res.json({
        token,
        user,
      });
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.account = (req, res) => { 
  // console.log(req.user);
  const {
    _id,
    username,
    email,
    role,
    isFirstVisit,
    pic,
    pin,
    confirmed,
    isSelfcreated,
    mobile,
    address,
    city,
    country,
    dob,
    gender,
    phone,
    state,
  } = req.user;
  res.json({
    _id,
    username,
    email,
    role,
    isFirstVisit,
    pic,
    pin,
    confirmed,
    isSelfcreated,
    mobile,
    address,
    city,
    country,
    dob,
    gender,
    phone,
    state,
  });
};

module.exports.newstatuschange = (req, res) => {
  const { _id } = req.body;
  User.findOneAndUpdate(
    { _id: _id },
    { isFirstVisit: false },
    { new: true, runValidators: true }
  )
    .then((employee) => {
      if (employee) {
        res.json(employee);
      } else {
        res.json({});
      }
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};

module.exports.logout = (req, res) => {
  const { user, token } = req;
  User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token } } })
    .then(() => {
      res.json({ notice: "successfully logged out" });
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.updatePasswordValidations = [
  body("current")
    .not()
    .isEmpty()
    .trim()
    .withMessage("Current password is required"),
  body("newPassword")
    .isLength({ min: 6 })
    .withMessage("New password must be 6 characters long"),
];

module.exports.updatePassword = async (req, res) => {
  const { current, newPassword, userId } = req.body;
  // console.log("testingIIIII");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    const user = await User.findOne({ _id: userId });
    if (user) {
      const matched = await bcryptjs.compare(current, user.password);
      if (!matched) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Current password is wrong" }] });
      } else {
        try {
          const salt = await bcryptjs.genSalt(10);
          const hash = await bcryptjs.hash(newPassword, salt);
          const newUser = await User.findOneAndUpdate(
            { _id: user },
            { password: hash },
            { new: true }
          );
          // console.log(newUser);
          return res
            .status(200)
            .json({ msg: "Your password has been updated" });
        } catch (error) {
          return res.status(500).json({ errors });
        }
      }
    }
  }
};

//from todo
//following two controllers are for password change during login

module.exports.getResetPasswordLink = asyncHandler(async (req, res) => {
  // console.log("test from getResetPasswordLink");
  // console.log(process.env.FRONTEND);

  const { email } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      // the connect port
      port: 465,

      // authenticate
      auth: {
        user: "bhoresudhakar26@gmail.com",
        pass: "kalyanibhore9008", //Gmail Account Password,
      },
    });

    const token = await jwt.sign(
      { id: user._id, username: user.username, createdAt: new Date() },
      "json123",
      {
        expiresIn: "5m", // expires in 24 hours
      }
    );

    // const url = `http://localhost:3000/createNewPassword/${token}`;
    const url = `${process.env.FRONTEND}/createNewPassword/${token}`;

    const emailSent = await transporter.sendMail({
      from: "bhoresudhakar26@gmail.com",
      to: email,
      subject: "Reset Password",
      text: "Reset your password for React ToDo app.",
      html: `<p>Please click this link to reset password. <a href="${url}">${url}</a> <br> the link will get expired after five minutes</p>`,
    });
    if (emailSent) {
      res.status(201).json({
        status: "Password reset email sent.",
        message: `Password reset link was sent to ${email}.`,
      });
    } else {
      res.status(403);
      throw new Error("Password reset failed, Email sending failed!");
    }
  } else {
    res.status(403);
    throw new Error("There is no account associated with this email!");
  }
});

module.exports.resetPassword = asyncHandler(async (req, res) => {
  // console.log(req.params)
  // console.log(req)
  const result = isJwtExpired(req.params.token);
  // console.log(result)
  if (!result) {
    try {
      const { id } = jwt.verify(req.params.token, "json123");
      if (id) {
        let { newPass, conPass } = req.body;
        if (newPass === conPass) {
          const salt = await bcryptjs.genSalt(10);
          newPass = await bcryptjs.hash(newPass, salt);
          const updatedUser = await User.findByIdAndUpdate(id, {
            password: newPass,
          });
          updatedUser.save();
          if (updatedUser) {
            res.status(200);
            res.json({ status: "Password reset successfully!" });
          } else {
            res.status(404);
            throw new Error("Password reset failed!");
          }
        } else {
          res.status(400).json({
            error: "Password does not match!",
          });
          // throw new Error("Password does not match!");
        }
      } else {
        res.status(404);
        throw new Error("User not found!");
      }
    } catch (error) {
      console.log(error);
      res.status(404);
      throw new Error("Password reset link expired");
    }
  } else {
    console.log("Password reset link expired");
    res.status(400).json({
      error: "Password reset link expired",
    });
  }
});

//users profiles

// @desc    GET user profile
// @route   GET /api/users/profile
// @access  Private
module.exports.updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  console.log(req.body);
  // console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^");
  // console.log(user)
  // console.log(typeof req.body.pin);

  if (user) {
    user.username = req.body.name || user.username;
    user.email = req.body.email || user.email;
    user.pic = req.body.pic || user.pic;

    user.pin = req.body.pin ? req.body.pin : user.pin ? user.pin : "";
    user.address = req.body.address
      ? req.body.address
      : user.address
      ? user.address
      : "";
    user.mobile = req.body.mobile
      ? req.body.mobile
      : user.mobile
      ? user.mobile
      : "";
    user.city = req.body.city ? req.body.city : user.city ? user.city : "";
    user.state = req.body.state ? req.body.state : user.state ? user.state : "";
    user.country = req.body.country
      ? req.body.country
      : user.country
      ? user.country
      : "";

    user.dob = req.body.dob ? req.body.dob : user.dob ? user.dob : "";
    user.gender = req.body.newgender ? req.body.newgender : "";

    const updatedUser = await user.save();
    var result="";
    //testing
    if(user.role==4) 
    {
      
      Customer.findOneAndUpdate({email:req.body.email},{name:req.body.name,mobile:req.body.mobile},{new:true,runValidators:true})
      .then((customer)=>{
          if(customer){
           result="customer database updated successfully";
          } else{
              res.json({})
          }
      })
      .catch((err)=>{
        result="customer database updation failed";
      })
    }
    else
    if(user.role==3)   //doctor
    {
      console.log("%%%%%%%%%%% test *********** TOP"); 
      Doctor.findOneAndUpdate({email:req.body.email},{name:req.body.name,mobile:req.body.phone},{new:true,runValidators:true})
      .then((customer)=>{
          if(customer){
           result="doctor database updated successfully";
           console.log("%%%%%%%%%%% test ***********");
          } else{
              res.json({})
          }
      })
      .catch((err)=>{
        result="doctor database updation failed";
        console.log(err);
      })
    }
    else
    if(user.role==2)  //employee
    {
      
      Employee.findOneAndUpdate({email:req.body.email},{name:req.body.name,mobile:req.body.mobile},{new:true,runValidators:true})
      .then((customer)=>{
          if(customer){
           result="employee database updated successfully";
          } else{
              res.json({})
          }
      })
      .catch((err)=>{
        result="employee database updation failed";
      })
    }
    //testing

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      pic: updatedUser.pic,
      isAdmin: updatedUser.isAdmin,
      result:result
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});
