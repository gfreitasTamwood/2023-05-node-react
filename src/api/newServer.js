const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", function(req,res,next){
    res.json({ message: "Thank you"});
});

app.listen(9000, function(){
    console.log("Server is running")
});