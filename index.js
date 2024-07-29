//const fs = require("fs");
//let { dataKoders } = require("./constants");

const { listKoders, saveKoder, init } = require("./utils");

const express = require("express");
const server = express();
server.use(express.json());

init();

server.get("/koders", (request, response) => {
  response.status(200).json(listKoders());
  response.end();
});

server.post("/koders", (request, response) => {
  const dataUsers = listKoders();
  const name = request.body.name;

  if (!name) {
    response.status(400).json({
      message: "name is required",
    });
    return;
  }

  dataUsers.push(name);
  saveKoder(dataUsers);

  response.json(listKoders());
});

server.delete("/koders/:name", (request, response) => {
  let dataKoders = listKoders();
  const name = request.params.name;

  const updateKoders = dataKoders.filter(
    (koder) => koder.toLowerCase() !== name.toLowerCase()
  );

  saveKoder(updateKoders);

  response.json(listKoders());
});

server.delete("/koders/", (request, response) => {
  let deleteDataUsers = listKoders();
  deleteDataUsers = [];
  saveKoder(deleteDataUsers);

  response.json(listKoders());
});

server.listen(8080, () => {
  console.log("aplicación corriendo en puerto 8080");
});
