//node.js server
const express = require('express');
const app = express();
const morgan = require('morgan'); //module to see in console al requests made by the browser or client apps
const path = require('path');

//Settings (settings when the server is deployed in any cloud service)
app.set('port', process.env.PORT || 3000); //this makes it use the port set by the OS or 3000 by default

//Middlewares (functions executed before the routes)    
app.use(morgan('dev')); //when running "npm run dev" it will log all the requests made by the browser
app.use(express.json()); //any data received will go through this function to check if its format is json

//routes
app.use('/api/tasks', require('./routes/tasks.routes'));

//static files (this tells node where are the static files like html, css,  js)
//console.log(path.join(__dirname, 'public')); //shows the search of "public" directory using dirname to make 
                                                //a standard search in any OS
app.use(express.static(path.join(__dirname, 'public')));


//starting server
//run "npm run dev" to start the server and it will automatically re run every time the any file is saved
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});