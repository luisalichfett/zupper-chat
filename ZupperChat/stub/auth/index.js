const mock = require("./mock");

const loginAPI = "/login";

const singupAPI = "/singup";

const login = {
  method: "POST",
  path: `${loginAPI}`,
  handler: (req, h) => h.response(mock.login),
};

const singup = {
  method: "POST",
  path: `${singupAPI}`,
  handler: (req, h) => h.response(mock.singUp),
};

module.exports = {
  login,
  singup,
};
