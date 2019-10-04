const express = require('express');

const pro = require('./helpers/projectModel');
const act = require('./helpers/actionModel');


const router = express.Router();


//POST






// GET - project 
router.get('/:id', (req,res)=>{
    pro.get(req.params.id)
    .then(pro => {
    res.status(200).json(pro)
    })
});

// GET - actions
router.get('/actions/:id', ( req, res)=> {
    act.get(req.params.id)
    .then(act => {
        res.status(200).json(act)
    })
})




//PUT
router.put('/actions/:id/', (req, res)=> {
    const { id } = req.params;
    const { notes } = req.body;
    act.update(id, { notes })
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