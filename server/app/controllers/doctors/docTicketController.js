const Ticket = require('../../models/ticket')

module.exports.doclist = (req,res) => {
        // console.log("testing doctor ***");

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