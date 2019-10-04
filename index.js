/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, you might want to read it really slow, don't worry be happy
in every line there may be trouble, but if you worry you make it double, don't worry, be happy
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, be happy
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just API…
I need this code, just don't know where, perhaps should make some middleware, don't worry, be happy

Go code!
*/

// Express
const express = require('express');


const dbRouter = require('./data/db-router');



// Server with express
const server = express();

server.use(express.json());
server.use('/api/projects', dbRouter);


// Server test
server.get('/test', (req,res)=>{
    res.status(200).json({ message: "In there like swim wear"});
})

// Server listening 
server.listen(5555, ()=> {
    console.log('\n*** Server is Running on http://localhost:5555 ***\n');
})