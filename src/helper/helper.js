function isValidUser(res, req, next) {
  if (!req.body.hasOwnProperty("name")) throw new Error(" отсутсвует имя");
  if (!req.body.hasOwnProperty("email")) throw new Error(" отсутсвует emal");
  if (!req.body.hasOwnProperty("surname"))
    throw new Error(" отсутсвует surname");
  if (!req.body.hasOwnProperty("pwd")) throw new Error(" отсутсвует password");
  const { name, surname, email, pwd } = req.body;
  if (!name) throw new Error("name is empty");
  if (!surname) throw new Error("surname is empty");
  if (!email) throw new Error("email is empty");
  if (!age) throw new Error("age is empty");
  if (pwd.lenght < 8) throw new Error("pwd is short");
  if (!/^[w]+@[a-z]+\.[a-z]{2,5}$/gm.test(email))
    throw new Error("неправ емаіл");
  next();
}

function isValidUserId(req, res, next) {
  if (req.params.hasOwnProperty("id")) throw new Error("id empty");
  const { id } = req.params;
  if (id < 0) throw new Error("id < 0");
  if (typeof id != "number" && typeof id != 'string') throw new Error("ne chislo");
  next();
}

module.exports = { isValidUser, isValidUserId };
