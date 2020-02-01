const express = require('express');
// const passport = require('passport');
const router = express.Router();
const NGO = require('../models/ngo');
const NGODETAILS = require('../models/ngodetails');

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

router.post('/modal', async(req,res)=>{
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


module.exports = router