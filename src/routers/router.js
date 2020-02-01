const express = require('express');
// const passport = require('passport');
const router = express.Router();
const {sendEmailToGovt} = require('../account/nodemailer');
//const {sendWelcomeMessage} = require('../account/send_sms');
const NGO = require('../models/ngo');
const NGODETAILS = require('../models/ngodetails');
const NGOPERMISSION = require('../models/ngopermission');

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
            await ngo.save();
            console.log("list",ngo);
            res.render("portfolio",{
              ngo
            });
    } catch (error) {
        res.render("error");
    }
})

router.post('/details', async(req,res)=>{
  console.log("modal: ",req.body);
  const details = new NGODETAILS(req.body);
  console.log("details-b4",details);
  
  try {
    await details.save();

    console.log("detail ",details);
    res.render("portfolio",{
      ngo:details
    })
    
  } catch (error) {
    res.send(error)
  }
})

router.post('/permission', async(req,res)=> {
  console.log(req.body);
  const permission = new NGOPERMISSION(req.body);
  try {
    await permission.save();

    sendEmailToGovt({permission})       //mail sent to host
    //sendWelcomeMessage(docs.applicationNo,docs.visitorName,docs.visitorEmail,docs.visitorPhnNo,docs.hostPhnNo,docs.checkInTime)
    res.render("portfolio",{
      ngo:permission
    })
  } catch (error) {
    res.send(error);
  }
})


module.exports = router