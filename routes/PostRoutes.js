

const express=require('express');
const router=express.Router();
const {create,update,Delete,getposts,gepostbyID} = require('../controllers/InfoControllers');
 
  router.post('/createpost', create);
router.post("/udpdatpost/:_id",update);
router.delete("/deletpost/:_id",Delete);
router.get("/getposts",getposts)
 router.get("/gepostbyID/:_id",gepostbyID ) 
 

  
  module.exports = router;