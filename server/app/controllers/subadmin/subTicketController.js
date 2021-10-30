const Ticket = require('../../models/ticket')
const Doctor = require("../../models/doctor");
const Customer = require('../../models/customer')

module.exports.subadlist = (req,res) => {
        // console.log("testing subadmin ***"); 

        Ticket.find({})
          .populate("customer", ["_id", "name","email"])
          .populate("department", ["_id", "name"]) 
          .populate("employees")
          .populate("doctors")
          .then((tickets) => { 
            
            // console.log(tickets);
            res.json(tickets);
          })
          .catch((err) => {
            res.json(err);
          });
    }

    
module.exports.listofdoctors = (req,res) => {
  // console.log("testing subadmin vivek ***");
  Doctor.find({})
  .populate("department")
  .then((doctors) => {
      // console.log(doctors)
    res.json(doctors);
  })
  .catch((err) => {
    res.json(err);
  });

 
}

module.exports.listofcustomers=(req,res)=>{
  // console.log("testing subadmin vivek bhore ***");
Customer.find({})
    .then((customers) => {
        res.json(customers)
    })
    .catch(err => {
        res.json(err)
    })

  }


    