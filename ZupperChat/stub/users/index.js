const mock = require("./mock");

const API = "/users";

const getUsersList = {
  method: "GET",
  path: `${API}/list`,
  handler: (req, h) => h.response(mock.usersList),
};

const getUsersChat = {
  method: "GET",
  path: `${API}/chat`,
  handler: (req, h) => h.response(mock.usersChat),
};

module.exports = {
  getUsersList,
  getUsersChat,
};
