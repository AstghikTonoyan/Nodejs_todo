import express from "express";
import path from "path";
import fs from "fs";

const app = express();

// html css public file read midlewayre
app.use(express.static("public"));
app.use(express.json());

// send get 
app.get("/", (req, res) => {
     res.redirect("./index.html");
});



app.get("/todos",(req, res)=>{
    fs.promises.readFile(path.resolve("data.json"), "utf8").then((todos)=>{
        res.send(todos);
    });
});

app.post("/todos", (req, res)=>{
    fs.promises
    .writeFile(path.resolve("data.json"), JSON.stringify(req.body, undefined, 2))
    .then(()=>{

        res.send("todoes received");
    });
});

app.listen(3001);
