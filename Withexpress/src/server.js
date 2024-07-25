const express = require("express");
const cors = require("cors");

// Declare the server
const app = express();

// Middleware to parse JSON
// Every request from the front will parse the data automatically
app.use(express.json());  

// Enable CORS for all routes
//used to protect the server to only accept request from a specific front
app.use(cors());

var list = [{ todo: "here is my to do list " }];

// Sending a GET request
app.get("/todos", (req, res) => {
  res.send(list);
});

// POST request
app.post("/todos", (req, res) => {
    
// everytime i send a request i will be adding another list 
    /*
    list.push(req.body)
    res.send(list)
    */
  console.log("body", req.body);  
  // This should log the request body
  res.send("Received the POST request");
});

// Setting the port
app.listen(3600, () => {
  console.log("Server is running on port 3600");
});
