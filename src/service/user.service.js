const {
  userRepository,
  createData,
  updateUserData,
  deleteById,
  changeName,
} = require("../repository/user.repository");

function getAllUser() {
  const data = userRepository();
  return data;
}

function getUserById(id) {
  const arr = userRepository();
  if (!arr) throw new Error("arr is empty");
  const filter = arr.filter((el) => el.id == id);
  return filter[0];
}

function getData(name, surname, email, pwd) {
  return createData(name, surname, email, pwd);
}

function updateData(id, name, surname, email, pwd) {
  return updateUserData(id, name, surname, email, pwd);
}

function deleteUser(id) {
  return deleteById(id);
}

function changeName1(id, body) {
  return changeName(id, body);
}
module.exports = {
  getAllUser,
  getUserById,
  getData,
  updateData,
  deleteUser,
  changeName1,
};
