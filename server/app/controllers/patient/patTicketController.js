const Ticket = require('../../models/ticket')

module.exports.patlist = (req,res) => {
        // console.log("testing patient ***");

        Ticket.find({})
          .populate("customer", ["_id", "name","email"])
          .populate("department", ["_id", "name"]) 
          .populate("employees")
          .populate("doctors")
          .then((tickets) => {
            res.json(tickets);
          })
          .catch((err) => {
            res.json(err);
          });
    }