const express = require('express');

const pro = require('./helpers/projectModel');
const act = require('./helpers/actionModel');


const router = express.Router();


//POST


// GET 
router.get('/:id', (req,res)=>{
    pro.get(req.params.id)
    .then(pro => {
    res.status(200).json(pro)
    })
});

//PUT
router.post('/', (req, res)=> {
    pro.update(req.body)
    .then(pro => {
        res.status(201).json(pro);
    })
    .catch(error => {
        // log error to server
        console.log(error);
        res.status(500).json({
          message: 'Error updating the project',
        });
      });
})

//DELETE
router.delete('/actions/:id', (req, res)=>{
    act.remove(req.params.id)
    .then(pro => {
        res.status(200).json(pro)
    })
})



module.exports = router;