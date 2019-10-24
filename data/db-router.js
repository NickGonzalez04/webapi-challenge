const express = require('express');

const pro = require('./helpers/projectModel');
const act = require('./helpers/actionModel');


const router = express.Router();


//POST - project 
router.post('/:post_id', (req,res)=>{
    const { post_id } = req.params;
    const { name, description} = req.body;
 pro.insert({ name, description})
 .then(pro =>{
     res.status(201).json(pro)
         });
});


// POST - actions 

router.post('/actions/:id', (req,res)=>{
    const { id } = req.params;
    const { project_id, description, notes } = req.body;
    act.insert(id, { project_id, description, notes })
    .then(act =>{
        res.status(201).json(act)
            });
})


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
    const { project_id, description, notes } = req.body;
    act.update(id, { project_id, description, notes })
    .then(act => {
        res.status(201).json(act);
    })
    .catch(error => {
        // log error to server
        console.log(error);
        res.status(500).json({
          message: 'Error updating the action',
        });
      });
   
})

router.put('/:id/', (req, res)=> {
    const { id } = req.params;
    const { name, description } = req.body;
    pro.update(id, { name, description })
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

// DELETE - project 
router.delete('/:id', (req, res)=> {
    const { id } = req.params;
    pro.remove(id)
    .then(pro =>{
        res.status(200).json(pro)
    });
})



//DELETE - actions 
router.delete('/actions/:id', (req, res)=>{
    act.remove(req.params.id)
    .then(pro => {
        res.status(200).json(pro)
    });
})


module.exports = router;