const express = require('express');

const pro = require('./helpers/projectModel');
const act = require('./helpers/actionModel');


const router = express.Router();



router.get('/', (req,res)=>{
    pro.get(req.params.id)
    .then(pro => {
    res.status(200).json(pro)
    })
});





module.exports = router;