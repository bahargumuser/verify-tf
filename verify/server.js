const express = require('express'); 
const jwt = require('jsonwebtoken'); 
  
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, (error) => {
    if(!error)
    console.log("Server is successfully running, and app is listening on port "+ PORT)
else
console.log("Error occurred, server can't start", error)
});