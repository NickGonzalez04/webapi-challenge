const express = require('express');

const pro = require('./seeds/01-projects');
const act = require('./seeds/02-actions');


const router = express.Router();



router.get('/', (req,res)=>{
    
    res.status(200).json({ message: "In there like swim again" })
});





module.exports = router;