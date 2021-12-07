const express = require('express')
const router = express.Router()  

const {aunthenticateUser} = require('../app/middlewares/authentication')

const usersController = require('../app/controllers/usersController')
const customersController = require('../app/controllers/customersController')
const departmentsController = require('../app/controllers/departmentsController')
const employeesController = require('../app/controllers/employeesController')
const doctorsController = require('../app/controllers/doctorsController')
const ticketsController = require('../app/controllers/ticketsController')
const patticketsController = require('../app/controllers/patient/patTicketController')
const docticketsController = require('../app/controllers/doctors/docTicketController')
const subticketsController = require('../app/controllers/subadmin/subTicketController')

//Users CRUD 

router.post('/users/register',usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account', aunthenticateUser, usersController.account)
router.post(
  "/newstatuschange",
  aunthenticateUser,
  usersController.newstatuschange
);


router.post(
  "/users/profile",
  aunthenticateUser,
  usersController.updateUserProfile
);


router.delete('/users/logout', aunthenticateUser, usersController.logout)
router.post(
  "/updatePassword",
  aunthenticateUser,
  [usersController.updatePasswordValidations],
  usersController.updatePassword
);

// Customers
router.get('/customers',aunthenticateUser,customersController.list)
router.post('/customers',aunthenticateUser,customersController.create)
router.get('/customers/:id',aunthenticateUser,customersController.show)
router.put('/customers/:id',aunthenticateUser,customersController.update)
router.delete('/customers/:id',aunthenticateUser,customersController.destroy)

// put
// delete

// departments
router.get('/departments',aunthenticateUser,departmentsController.list)
router.post('/departments',aunthenticateUser,departmentsController.create)
router.get('/departments/:id',aunthenticateUser,departmentsController.show)
router.put('/departments/:id',aunthenticateUser,departmentsController.update)
router.delete('/departments/:id',aunthenticateUser,departmentsController.destroy)

// employees
router.get('/employees',aunthenticateUser,employeesController.list)
router.post('/employees',aunthenticateUser,employeesController.create)
router.get('/employees/:id',aunthenticateUser,employeesController.show)
router.put('/employees/:id',aunthenticateUser,employeesController.update)
router.delete('/employees/:id',aunthenticateUser,employeesController.destroy)
router.get('/subdoctors',aunthenticateUser,subticketsController.listofdoctors)
router.get('/subcustomers',aunthenticateUser,subticketsController.listofcustomers)

//doctors
router.get("/doctors", aunthenticateUser, doctorsController.list);
router.post("/doctors", aunthenticateUser, doctorsController.create);
router.get("/doctors/:id", aunthenticateUser, doctorsController.show);
router.put("/doctors/:id", aunthenticateUser, doctorsController.update);
router.delete("/doctors/:id", aunthenticateUser, doctorsController.destroy);


// tickets
router.get('/tickets',aunthenticateUser,ticketsController.list) 
router.get('/pattickets',aunthenticateUser,patticketsController.patlist) 
router.get('/doctickets',aunthenticateUser,docticketsController.doclist) 
router.get('/subadtickets',aunthenticateUser,subticketsController.subadlist) 

router.post('/tickets',aunthenticateUser,ticketsController.create)
router.get('/tickets/:id',aunthenticateUser,ticketsController.show)
router.put('/tickets/:id',aunthenticateUser,ticketsController.update)
router.delete('/tickets/softDelete/:id',aunthenticateUser,ticketsController.softDelete)
router.delete('/tickets/:id',aunthenticateUser,ticketsController.destroy)


//password code from todo

router.post(
  "/api/users/getResetPasswordLink",
  usersController.getResetPasswordLink
);

router.post("/api/users/resetPassword/:token",usersController.resetPassword);

module.exports = router