const express = require("express");
const {
  getAllUser,
  getUserById,
  getData,
  updateData,
  deleteUser,
  changeName1,
  changeEmail,
} = require("../service/user.service");

const { isValidUser, isValidUserId } = require("../helper/helper");
const { send } = require("express/lib/response");
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

route.post("/ ", (req, res) => {
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

route.patch("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    res.status(200).send(changeName1(id, body));
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.patch("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const dataId = getUserById(id);
    res.status(200).send(dataId);
  } catch (error) {
    res.status(404).send(error.message);
  }
});


route.patch("/:id", (req, res) => {
    try {
      
      res.status(200).send(isValidUser(req,res));
    } catch (error) {
      res.status(404).send(error.message);
    }
  });
  
module.exports = { route };
