const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const dbUrl =
  "mongodb+srv://zahrazellazi02:I2KIihHj3vrsIfmw@cluster0.wdvbprk.mongodb.net/halim?retryWrites=true&w=majority&appName=Cluster0";

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
//models

//const Blog = mongoose.model('Blog', { name: String , text : String });

const TodoTask = require("./models/ToDoTask");

mongoose
  .connect(dbUrl, connectionParams)
  .then(() => {
    console.info("connected to db");
  })
  .catch((e) => {
    console.log("error : ", e);
  });
dotenv.config();

app.use("/static", express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("todo.ejs");
});

app.post("/todotask", async (req, res) => {
  console.log(req.body);
    /*await TodoTask.create({content:req.body.content,
        date:new Date()
    })
    res.status(200).send({
        msg:"done"
    })*/
  const { content, date } = req.body;
  const data = await TodoTask.create({
    content: content,
    date: date,
  });
  res.send(data);
});

// GET METHOD
app.get("/todotask", async (req, res) => {
  /*await TodoTask.find({}, (err, tasks) => {
    res.render("todo.ejs", { todoTasks: tasks });
    });*/
  const data = await TodoTask.find();
  res.send(data);
});

////////////////////////
/*
    app.get("/blog" , async(req , res)=> {
        const data = await Blog.find()
        res.send(data)
    })
    
    
    app.post("/blog" , async(req , res)=> {
        const data = await Blog.create(req.body)
        res.send(data)
    })
    //////////////////////////////////
    */
app.listen(3000, () => console.log("Server Up and running"));
