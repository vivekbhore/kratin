const Customer = require('../models/customer')
const Ticket = require('../models/ticket')
const _ = require('lodash')
const User = require("../models/user");
var generator = require("generate-password");
const nodemailer = require("nodemailer");


module.exports.list = (req,res) => {
    Customer.find({userId: req.user._id})
    .then((customers) => {
        res.json(customers)
    })
    .catch(err => {
        res.json(err)
    })
}

module.exports.create = (req,res) => {
    const body = req.body
    const customer = new Customer(body)

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
             },
             {
               new: true,
               runValidators: true,
             }
           )
             .then((customer) => {
               if (customer) {
                 console.log("changes updated successfully");

                  // res.json(customer);
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
           };
           //   const body = req.body;
           const user = new User(newCustomerData);
          //  console.log(user);
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
                 subject: "Account created at onesmarter HealthWeb",
                 text: "Login to your account with these credentials",
                 html: `<p>Login to your account with these credentials. <span>email =${body.email}</span><br />Password = ${password}</p>`,
               });
               if (emailSent) {
                   console.log("email sent successfully")
                //    res.status(201).json({
                //    status: "account activation mail sent",
                //    message: `Account activation mail was sent to ${body.email}.`,
                //  });
               } else {
                 res.status(403);

                 throw new Error(
                   "Password reset failed, Email sending failed!"
                 );
               }
              //  console.log("user added successfully", user);
             })
             .catch((err) => {
               console.log("something went wrong", err);
               res.json(err);
             });
         }
       }
     });
    // testing

        customer.userId = req.user._id;
        customer
          .save()
          .then((customer) => {
            res.json(customer);
          })
          .catch((err) => {
            res.json(err);
          });



}

//including customer as user by admin/subadmin

const register = (body) => {

};

//including customer as user by admin/subadmin


module.exports.show = (req,res) => {
    const id = req.params.id
    Customer.findOne({_id:id})
    .then((customer)=>{
        if(customer){
            Ticket.find({'customer':customer._id})
                .then(tickets=>{
                    res.json({customer,tickets})
                })
        } else {
            res.json({})
        }
    })
    .catch(err => res.json(err))
}


module.exports.update = (req,res) => {
  // console.log(req.body)
    const id = req.params.id
    const body = req.body

    Customer.findOneAndUpdate({_id:id},body,{new:true,runValidators:true})
    .then((customer)=>{
        if(customer){
          // testing 
          User.findOneAndUpdate(
            { email: body.email },
            {
              username: body.name,
              mobile: body.mobile,
            },
            {
              new: true,
              runValidators: true,
            }
          )
            .then((customer) => {
              if (customer) {
                console.log("changes updated successfully");

                res.json(customer);
              } else {
                console.log("error occured while updating changes");

                res.json({});
              }
            })
            .catch((err) => res.json(err));
          // testing
          // res.json(customer);
        } else{
            res.json({})
        }
    })
    .catch((err)=> res.json(err))
}




module.exports.destroy = (req,res) => {
    const id = req.params.id
    Customer.findOneAndDelete({userId:req.user._id, _id:id})
    .then((customer)=>{
        if(customer){
            res.json(customer)
        } else{
            res.json({})
        }
    })
    .catch((err)=> res.json(err))
}