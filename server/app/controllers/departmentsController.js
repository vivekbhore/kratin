const Department = require('../models/department')
const Employee = require('../models/employee')


module.exports.list = (req,res)=>{
    Department.find({})
        .then(departments=>{
            res.json(departments)
        })
}

module.exports.show = (req,res)=>{
    const id = req.params.id
    Department.findOne({userId: req.user._id, _id:id})
        .then(department=>{
            if(department){
                Employee.find({'department':department._id})
                .then(employees=>
                    res.json({department,employees})
                )
                .catch(err => res.json(err))
            } else {
                res.json({})
            }
        })
        .catch(err=>{
            res.json(err)
        })
}

module.exports.create = (req,res)=>{
    const body = req.body
    const department = new Department({name: body.name})
    department.userId = req.user._id
    department.save()
        .then((department)=>{
            res.json(department)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.update = (req,res)=>{
    const id = req.params.id
    const body = req.body
    Department.findOneAndUpdate({userId: req.user._id, _id:id},body,{new:true, runValidators:true})
        .then(department=>{
            if(department){
                res.json(department)
            } else {
                res.json({})
            }
        })
        .catch(err=>{
            res.json(err)
        })
}

module.exports.destroy = (req,res)=>{
    const id = req.params.id
    Department.findOneAndDelete({userId: req.user._id, _id:id})
        .then(department=>{
            if(department){
                res.json(department)
            } else {
                res.json({})
            }
        })
        .catch(err=>{
            res.json(err)
        })
}