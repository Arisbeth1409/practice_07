const fs = require("fs");

let { dataKoders } = require("./constants");

function init() {
  const fileKoders = fs.existsSync(dataKoders);

  if (!fileKoders) {
    fs.writeFileSync(dataKoders, JSON.stringify([]), "utf8");
  }
}

function listKoders() {
  const dataFile = fs.readFileSync(dataKoders, "utf8");
  const koders = JSON.parse(dataFile);
  return koders;
}

function saveKoder(koders) {
  fs.writeFileSync(dataKoders, JSON.stringify(koders), "utf8");
}

module.exports = {
  init,
  listKoders,
  saveKoder,
};
