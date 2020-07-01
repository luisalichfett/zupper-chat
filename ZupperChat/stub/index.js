"use strict";

const map = require("lodash/map");
const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const server = Hapi.server({
  host: "localhost",
  port: 8080,
  routes: {
    cors: {
      origin: ["*"],
      headers: ["Content-Type"],
    },
  },
});

map(routes, (routeModule) => map(routeModule, (route) => server.route(route)));

const init = async () => {
  await server.start();

  console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
