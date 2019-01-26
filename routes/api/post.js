const express = require('express');
const router = express.Router();
router.get('/test', (req,res) => res.json({msg:"Post Works"}));
const mongoose = require('mongoose');
mongoose.connect('mongodb://abhinav:${pass}@ds011419.mlab.com:11419/devconnector');
module.exports = router;
