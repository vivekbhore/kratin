const Ticket = require("../models/ticket");
// const User = require("../models/user");

const User = require("../models/user");
var generator = require("generate-password");
const nodemailer = require("nodemailer");
const Doctor = require("../models/doctor");

module.exports.list = (req, res) => {
  // console.log("list.. vivek");

  Doctor.find({}) 
    .populate("department")
    .then((doctors) => {
        // console.log(doctors)
      res.json(doctors);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.create = (req, res) => { 
  // console.log("Doctor craete..");
  const body = req.body;
  const doctor = new Doctor(body);

  // testing
  var password = generator.generate({
    length: 6,
    numbers: true,
  });
  User.countDocuments({ email: body.email }, function (err, count) {
    if (err) {
      console.log(err);
    } else {
      if (count > 0) {
        // res.json({ errors: "email already exists" });
        User.findOneAndUpdate(
          { email: body.email },
          {
            username: body.name,
            mobile: body.mobile,
            role: 3,
          },
          {
            new: true,
            runValidators: true,
          }
        )
          .then((customer) => {
            if (customer) {
              console.log("changes updated successfully");

              //   res.json(customer);
            } else {
              console.log("error occured while updating changes");

              res.json({});
            }
          })
          .catch((err) => res.json(err));
      } else {
        const newCustomerData = {
          username: body.name,
          email: body.email,
          mobile: body.mobile,
          isSelfcreated: false,
          password: password,
          role:3
        };
        //   const body = req.body;
        const user = new User(newCustomerData);
        // console.log(user);
        user
          .save()
          .then(async (user) => {
            // const { _id, username, email,password } = user;
            // res.json({ _id, username, email });
            const transporter = nodemailer.createTransport({
              service: "Gmail",
              // the connect port
              port: 465,

              // authenticate
              auth: {
                user: "vsbtempvsb@gmail.com",
                pass: "F**kexcuses@1239008", //Gmail Account Password,
              },
            });

            const emailSent = await transporter.sendMail({
              from: "vsbtempvsb@gmail.com",
              to: body.email,
              subject: "Doctor Account created at onesmarter HealthWeb",
              text: "Login to your account with these credentials",
              html: `<p>Login to your account with these credentials. <span>email =${body.email}</span><br />Password = ${password}</p>`,
            });
            if (emailSent) {
              console.log("email sent successfully");
              //    res.status(201).json({
              //    status: "account activation mail sent",
              //    message: `Account activation mail was sent to ${body.email}.`,
              //  });
            } else {
              res.status(403);

              throw new Error("Password reset failed, Email sending failed!");
            }
            // console.log("user added successfully", user);
          })
          .catch((err) => {
            console.log("something went wrong", err);
            res.json(err);
          });
      }
    }
  });
  // testing

  doctor.userId = req.user._id;
  doctor
    .save()
    .then((doctor) => {
      res.json(doctor);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;
  Doctor.findOne({ userId: req.user._id, _id: id })
    .populate("department")
    .then((doctor) => {
      if (doctor) {
        Ticket.find({ doctors: doctor._id })
          .then((tickets) => {
            if (tickets) {
              res.json({ doctor, tickets });
            } else {
              res.json({});
            }
          })
          .catch((err) => res.json(err));
      } else {
        res.json({});
      }
    })
    .catch((err) => res.json(err));
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  // console.log(req.user._id);
  // console.log(id);
  // console.log(req);
  const body = req.body;
  console.log(body);
  Doctor.findOneAndUpdate({ _id: id }, body, {
    new: true,
    runValidators: true,
  })
    .then((doctor) => {
      if (doctor) {
        User.findOneAndUpdate({ email: body.email }, {
          email:body.email,
          username: body.name,
           mobile: body.mobile
        }, {
          new: true,
          runValidators: true,
        })
        .then((res)=>{
          console.log("doc updation in user model success",res)
        })
        .catch((err)=>{
          console.log("some error occur while doc updation in user model",err)
          
        })
        res.json(doctor);
      } else {
        res.json({});
      }
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};

module.exports.destroy = (req, res) => {
  const id = req.params.id;
  Doctor.findOneAndDelete({ userId: req.user._id, _id: id })
    .then((doctor) => {
      if (doctor) {
        res.json(doctor);
      } else {
        res.json({});
      }
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
};
