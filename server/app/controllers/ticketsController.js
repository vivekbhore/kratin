const Ticket = require('../models/ticket')
const Customer = require('../models/customer')

module.exports.list = (req,res) => {

    // Ticket.find({ userId: req.user._id })
    //   .populate("customer", ["_id", "name","email"])
    //   .populate("department", ["_id", "name"]) 
    //   .populate("employees")
    //   .populate("doctors")
    //   .then((tickets) => {
    //     res.json(tickets);
    //   })
    //   .catch((err) => {
    //     res.json(err);
    //   });


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

module.exports.create = async(req,res) => {
    // console.log("create ticket.",req.body);
    const body = req.body
    await Customer.find({email:req.user.email})
    .then((cus)=>{
        console.log("....");
    //  body.customer=cus[0]._id
    })
    // console.log("*************************")
    // console.log(req)
    // console.log("*********************")
    // console.log(body) 
    const ticket = new Ticket(body) 
    ticket.userId = req.user._id
    ticket.save()
    .then((ticket)=>{
       res.json(ticket)
    })
    .catch(err => {
        console.log(err)
        res.json(err)
    })

}

module.exports.show = (req,res) => {
    const id = req.params.id
    Ticket.findById(id).populate('customer',['_id','name']).populate('department',['_id','name']).populate('employees',['_id','name'])
        .then((ticket)=>{
            if(ticket){
                res.json(ticket)
            } else {
                res.json({})
            }
        })
        .catch(err => res.json(err))
    }

// module.exports.update = (req,res) => {
//     // console.log(req)
//     const id = req.params.id
//     const body = req.body
//     console.log(body)
//     delete body.empviv;
//     delete body.doctviv;
//     Ticket.findOneAndUpdate({userId: req.user._id,_id:id},body,{new:true,runValidators:true}).populate('customer',['_id','name'])
//     .then((ticket)=>{
//         console.log("#########");
//         console.log(ticket);
//         console.log("##########");
//         if(ticket){
//             console.log("updated successfully********")
//             res.json(ticket)
//         } else{
//             console.log("updation failed********")
//             res.json({})
//         }
//     })
//     .catch((err)=> {
//         console.log({err})
//         res.json(err);
//     })
// }

module.exports.update = (req,res) => {
    // console.log(req)
    const id = req.params.id
    const body = req.body
    // console.log(body)
    delete body.empviv;
    delete body.doctviv;
    if(body.department=="")
    {
        body.department ='60ffbd59c32d8b4678bc4072';
    }
    Ticket.findOneAndUpdate({_id:id},body,{new:true,runValidators:true}).populate('customer',['_id','name'])
    .then((ticket)=>{
        // console.log("#########");
        // console.log(ticket);
        // console.log("##########");
        if(ticket){
            // console.log("updated successfully********")
            res.json(ticket)
        } else{
            // console.log("updation failed********")
            res.json({})
        }
    })
    .catch((err)=> {
        console.log({err})
        res.json(err);
    })
}

module.exports.softDelete = (req,res) => {
    const id = req.params.id
    const body = req.body
    Ticket.findOneAndUpdate({userId: req.user._id, _id: id},body,{new: true, runValidators: true})
        .then(ticket => {
            if(ticket){
                res.json(ticket)
            } else {
                res.json({})
            }
        })
        .catch(err=>{
            res.json(err)
        })
}


module.exports.destroy = (req,res) => {
    // console.log("test for deletion");
    const id = req.params.id
    Ticket.findOneAndDelete({userId: req.user._id, _id: id})
    .then((ticket)=>{
        if(ticket){
            res.json(ticket)
        } else{
            res.json({})
        }
    })
    .catch((err)=> res.json(err))
}