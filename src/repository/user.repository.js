const fs = require("fs");

function userRepository() {
  const json = fs.readFileSync("./src/repository/storage.json");
  return JSON.parse(json);
}

function createData(name, surname, email, pwd) {
  const arr = userRepository();
  const newObj = {
    id: Math.max(...arr.map((el) => el.id)) + 1,
    name: name,
    surname: surname,
    email: email,
    pwd: pwd,
  };

  const filter = arr.some((el) => el.email == newObj.email);

  if (filter) throw new Error("this email is busy");
  if (!filter) {
    arr.push(newObj);
    fs.writeFileSync("./src/repository/storage.json", JSON.stringify(arr));
    return arr;
  }
}

function updateUserData(id, name, surname, email, pwd) {
  const json = fs.readFileSync("./src/repository/storage.json");
  const arr = JSON.parse(json);
  const index = arr.findIndex((el) => el.id == id);
  arr[index] = {
    id: id,
    name: name,
    surname: surname,
    email: email,
    pwd: pwd,
  };
  fs.writeFileSync("./src/repository/storage.json", JSON.stringify(arr));
  return arr;
}

function deleteById(id) {
  const arr = userRepository();
  const filterArr = arr.filter((el) => el.id != id);
  if (arr.lenght == filterArr.lenght) throw new Error("this index ---");
  fs.writeFileSync("./src/repository/storage.json", JSON.stringify(filterArr));
  return filterArr;
}

function changeName(id, body) {

  const json = fs.readFileSync("./src/repository/storage.json");
  const arr = JSON.parse(json);
  const index = arr.findIndex((el) => el.id == id);
  if (index < 0) throw new Error("error");
  const item = arr[index];
  arr[index] = { ...item, ...body };
  fs.writeFileSync("./src/repository/storage.json", JSON.stringify(arr));
  return arr;
}

module.exports = {
  userRepository,
  createData,
  updateUserData,
  deleteById,
  changeName,
};

