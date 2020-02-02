const express = require('express');
const moment = require('moment');
// const passport = require('passport');
const router = express.Router();
const {sendEmailToGovt} = require('../account/nodemailer');
//const {sendWelcomeMessage} = require('../account/send_sms');
const NGO = require('../models/ngo');
const NGODETAILS = require('../models/ngodetails');
const NGOPERMISSION = require('../models/ngopermission');
const authngo = require('../middleware/authngo');
const jwt=require("jsonwebtoken");

// const initializePassport = require('./passport-config')

// initializePassport(
//   passport,
//   email => users.find(user => user.email === email),
//   id => users.find(user => user.id === id)
// )
router.post('/signup', async(req,res)=> {
    console.log(req.body);
    const ngo = new NGO(req.body);
    try {
      var token = jwt.sign({ password: req.body.password}, 'shhhhh');
      localStorage.setItem('ngotoken',token);
            await ngo.save();
            console.log("list",ngo);
            res.render("portfolio.hbs",{
              ngo
            });
    } catch (error) {
        res.render("error.hbs");
    }
})
router.get("/logout",(req,res)=>{
  localStorage.removeItem("token");
  res.redirect("/");
})


router.post('/details',authngo,async(req,res)=>{
  console.log("modal: ",req.body);
  const details = new NGODETAILS(req.body);
  console.log("details-b4",details);
  
  try {
    await details.save();

    console.log("detail ",details);
    res.render("portfolio.hbs",{
      ngo:details
    })
    
  } catch (error) {
    res.send(error)
  }
})

router.post('/permission',authngo,async(req,res)=> {
  const permission = new NGOPERMISSION(req.body);
  permission.registrationid = 'REG'+Date.now();
  permission.date = moment().format("MMM Do YYYY");
  console.log(permission);
  try {
    await permission.save();

    sendEmailToGovt({permission})       //mail sent to host
    //sendWelcomeMessage(docs.applicationNo,docs.visitorName,docs.visitorEmail,docs.visitorPhnNo,docs.hostPhnNo,docs.checkInTime)
    res.render("portfolio.hbs",{
      ngo:permission
    })
  } catch (error) {
    res.send(error);
  }
})





module.exports = router