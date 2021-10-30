const Employee = require('../models/employee')
const Ticket = require('../models/ticket')

const User = require("../models/user");
var generator = require("generate-password");
const nodemailer = require("nodemailer");

module.exports.list = (req,res) => {
    // console.log("list..")

    Employee.find({}).populate('department')
    .then((employees) => {
        res.json(employees)
    })
    .catch(err => {
        res.json(err)
    })
}

module.exports.create = (req,res) => {
  // console.log("Employee craete..");
  const body = req.body;
  const employee = new Employee(body);

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
            role:2
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
          role:2
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
                user: "bhoresudhakar26@gmail.com",
                pass: "kalyanibhore9008", //Gmail Account Password,
              },
            });

            const emailSent = await transporter.sendMail({
              from: "bhoresudhakar26@gmail.com",
              to: body.email,
              subject: "Subadmin Account created at onesmarter HealthWeb",
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

  employee.userId = req.user._id;
  employee
    .save()
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      res.json(err);
    });
}

module.exports.show = (req,res) => {
    const id = req.params.id
    Employee.findOne({userId: req.user._id,_id: id}).populate('department')
    .then((employee)=>{
        if(employee){
            Ticket.find({employees:employee._id})
                .then(tickets=>{
                    if(tickets) {
                        res.json({employee,tickets})
                    }
                    else {
                        res.json({})
                    }
                })
                .catch(err => res.json(err))
        } else {
            res.json({})
        }
    })
    .catch(err => res.json(err))
}

module.exports.update = (req,res) => {

    const id = req.params.id
    //  console.log(req.user._id);
    //  console.log(id);
    //  console.log(req);
    const body  = req.body
    // console.log(body)
    Employee.findOneAndUpdate({userId: req.user._id, _id: id},body,{new:true,runValidators:true})
    .then((employee)=>{
        if(employee){
            res.json(employee)
        } else{
            res.json({})
        }
    })
    .catch((err)=> {
        console.log(err)
        res.json(err);
    })
}

module.exports.destroy = (req,res) => {
    const id = req.params.id
    Employee.findOneAndDelete({userId: req.user._id, _id: id})
    .then((employee)=>{
        if(employee){
            res.json(employee)
        } else{
            res.json({})
        }
    })
    .catch((err)=> {
        console.log(err)
        res.json(err);
    })
}