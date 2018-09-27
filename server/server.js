const express = require('express')
    , app = express()
    , server = require('http').Server(app);
const PORT= process.env.PORT||8003;

app.use(express.static('./../'));

server.listen(PORT, function() {
    console.log('server started on  8003');
});
