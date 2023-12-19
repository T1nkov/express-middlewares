const express = require("express");
const {
  getAllUser,
  getUserById,
  getData,
  updateData,
  deleteUser,
} = require("../service/user.service");

const route = express.Router();

route.get("/", (req, res) => {
  try {
    res.status(200).send(getAllUser());
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).send(getUserById(id));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.post("/", (req, res) => {
  try {
    res.status(200).send(getUserById(id));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.post("/cl ", (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    res.status(200).send(getData(name, surname, email, pwd));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    res.status(200).send(updateData(id, name, surname, email, pwd));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).send(deleteUser(id));
  } catch (error) {
    res.status(404).send(error.message);
  }
});
module.exports = { route };
