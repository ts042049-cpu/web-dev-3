const express = require('express');
const router = express.Router();
const fs = require('fs');

const filePath = './data/students.json';
let idCounter = 3;

function getData() {
  const fileData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileData);
}

function saveData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

const getUser = (req, res) => {
  let data = getData();
  res.status(200).json({
    message: "data fetched",
    success: true,
    data: data
  });
};

const getbyid = (req, res) => {
  const id = Number(req.params.id);
  let data = getData();
  let usr = data.find((e) => e.id === id);

  if (!usr) {
    return res.status(404).json({ message: "User not found", success: false });
  }

  res.status(200).json({ message: "User Found", success: true, usr });
};

const createUrs = (req, res) => {
  let { name, course } = req.body;
  if (!name || !course) {
    return res.status(400).json({ message: "data empty", success: false });
  }

  let data = getData();
  idCounter++;
  let newId = idCounter;

  data.push({ id: newId, name, course });
  saveData(data);

  res.status(201).json({ message: "Data created", success: true, data });
};

const updUsr = (req, res) => {
  let { name, course } = req.body;
  let id = Number(req.params.id);
  let data = getData();

  let usr = data.find((e) => e.id === id);
  if (!usr) {
    return res.status(404).json({ message: "User not found", success: false });
  }

  if (name) usr.name = name;
  if (course) usr.course = course;

  saveData(data);

  res.status(200).json({ message: "Data updated", success: true, data });
};

const delUrs = (req, res) => {
  let id = Number(req.params.id);
  let data = getData();

  let index = data.findIndex((e) => e.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "User not found", success: false });
  }

  data.splice(index, 1);
  saveData(data);

  res.status(200).json({ message: "user deleted", success: true, data });
};

router.get('/', getUser);
router.get('/:id', getbyid);
router.post('/', createUrs);
router.put('/:id', updUsr);
router.delete('/:id', delUrs);

module.exports = router;