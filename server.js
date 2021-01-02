const e = require('express');
const express = require('express');
const server = express();

const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/v1/users', require('./routes/v1/users'));
server.use('/v1/posts', require('./routes/v1/posts'));

server.listen(port, host, function(err){
    if(err) throw err;
    else{
        console.log(`Server started on ${host}:${port}`);
    }
});
