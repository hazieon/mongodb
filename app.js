var Poem = require("./poem.model");
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
const e = require("express");
require("dotenv").config();
const { readSync } = require("fs");

var PORT = process.env.port;
const db = process.env.db;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//connection initialised
mongoose.connect(db, { useNewUrlParser: true });

//simple get, check connection is working
app.get("/", (req, res) => {
  res.send("難波津に");
});

//get all from /colletion, do Item.find
app.get("/poems", (req, res) => {
  console.log("reading all poems");
  Poem.find({}) //empty {}  returns all
    .exec((err, poem) => {
      if (err) {
        res.send("error");
      } else {
        console.log(poem);
        res.json(poem);
      }
    });
});

//get specific item - findOne .exec
app.get("/poems/:id", (req, res) => {
  console.log("finding one poem");
  Poem.findOne({
    _id: req.params.id,
  }).exec((err, poem) => {
    if (err) {
      res.send("error");
    } else {
      console.log(poem);
      res.json(poem);
    }
  });
});

//post route version one: separate parts
app.post("/poem", (req, res) => {
  var newPoem = new Poem();
  newPoem.title = req.body.title;
  newPoem.author = req.body.author;
  newPoem.detail.poemNumber = req.body.detail.poemNumber;
  newPoem.detail.season = req.body.detail.poemNumber;
  newPoem.detail.theme = req.body.detail.theme;
  newPoem.added = req.body.added;
  newPoem.keyChars = req.body.keyChars;
  newPoem.anthology = req.body.anthology;
  newPoem.poemEng = req.body.poemEng;
  newPoem.poemJp = req.body.poemJp;

  newPoem.save((err, poem) => {
    if (err) {
      res.send("error");
    } else {
      console.log(poem);
      res.json(poem);
    }
  });
});

//cleaner, compact version; more error prone:
//take in whole req body, not individual parts
//note: new item should be unique if required
app.post("/poem2", (req, res) => {
  Poem.create(req.body, (err, poem) => {
    if (err) {
      res.send("error");
      console.log(poem);
    } else {
      console.log(poem);
      res.send(poem);
    }
  });
});

// //update route, find one and update method
//put api call to route with id
//update one item's title, by its id
app.put("/poem/:id", (req, res) => {
  Poem.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    { $set: { title: req.body.title } },
    { upsert: true },
    (err, newPoem) => {
      if (err) {
        console.log("error", err);
      } else {
        console.log(newPoem);
        res.status(204);
      }
    }
  );
});

//delete one item, based on id
//find one and remove api call, id passed in params
app.delete("/poem/:id", (req, res) => {
  Poem.findOneAndRemove(
    {
      _id: req.params.id,
    },
    (err, poem) => {
      if (err) {
        console.log("error", err);
      } else {
        console.log(poem);
        res.status(204);
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
