 // MVC
 // model
 // view 
 // controller
 // routes


 const express = require("express")

 const router = express.Router()

 const authController = require("../controllers/user")

 router.post("/register",authController.registerUser)
 router.post("/login",authController.loginUser)

 module.exports = router;

 
