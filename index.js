const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const dbUrl = 
    "mongodb://localhost:27017/dbtest"

const connectionParams = {
    useNewUrlParser: true ,
    useUnifiedTopology: true,
}
//models
const TodoTask = require("./models/ToDoTask");
mongoose
    .connect(dbUrl , connectionParams)
    .then (() => {
        console.info("connected to db");
    })
    .catch((e) => {
        console.log("error : " , e);
    });
    dotenv.config();

app.use("/static" , express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get('/',(req, res) => {
    
    res.render('todo.ejs');
});

app.post('/',(req, res) => {
    console.log(req.body);
    TodoTask.create({content:req.body.content,
        date:new Date()
    })
    res.status(200).send({
        msg:"done"
    })
    });

// GET METHOD
app.get("/", (req, res) => {
    TodoTask.find({}, (err, tasks) => {
    res.render("todo.ejs", { todoTasks: tasks });
    });
    })
app.listen(3000, () => console.log("Server Up and running"));