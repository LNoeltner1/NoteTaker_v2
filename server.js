// Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = 3000;

const notes = [];

//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTML ROUTES
app.get(`/notes`, function (req, res) {
  //returns notes.html
  console.log(req.body);
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get(`*`, function (req, res) {
  //returns index.html
  console.log(req.body);
  res.sendFile(path.join(__dirname, "public/index.html"));
});

//api routes
app.get(`/api/notes`, function (req, res) {
  //reads db.json file
  res.readFile(db.json, "utf8", function (err) {
    if (err) throw err;
  });
});

app.post(`/api/notes`, function (req, res) {
  //add note to db.json and return note to user
  const newNote = req.body;
  console.log(newNote);
  notes.push(newNote);
});

//req.params
app.delete(`/api/notes/:id`, function (req, res) {
  //gets query params with id of note to delete
  //1. read all json,
  fs.readFile(`/api/notes`, "utf8", function (req, res) {});
  //2. remove note with given id,

  //3. rewrite notes to db.json
  fs.writeFile();
});

//LISTENER

app.listen(PORT, function () {
  console.log(`Server listening in on ${PORT}`);
});

//fun code

function rejoiceInTheEndTimes() {
  if (sky === "bright") {
    dontLook();
    goUnderground();
  } else if (sky === "dark") {
    doWhatever();
    startCult();
  } else {
    layDownAndAcceptFate();
  }
}

function yellAtSky() {
  if (time < 7 || time > 16) {
    alert("I hate the Moon!");
  } else if (7 < time < 16) {
    alert("I hate the Sun!");
  } else {
    rejoiceInTheEndTimes();
  }
}

function cry() {
  if (tearNumber === 0) {
    tearNumber++;
  } else if (tearNumber >= 1) {
    tearNumber++;
  } else {
    tearNumber++;
  }
}

const forest = ["bears", "trees", "dirt"];

let me = "Lauren";

function moveToForest() {
  forest.push(me);
}

if (instructionQualityThisWeek !== "good") {
  yellAtSky();
} else if (instructionQualityThisWeek === "bad") {
  cry();
  alert("Goodbye, cruel world.");
  movetoForest();
  getEatenByBear();
} else {
  succeed();
}
