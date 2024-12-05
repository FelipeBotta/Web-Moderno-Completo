const fs = require("fs");

const path = __dirname + "/arquivo.json";

// sincrona
const conteudo = fs.readFileSync(path, "utf-8");
console.log(conteudo);

// assincrona
fs.readFile(path, "utf-8", (err, conteudo) => {
  const config = JSON.parse(conteudo);
  console.log(`${config.db.host}:${config.db.porta}`);
});

const config = require("./arquivo.json");
console.log(config.db);

fs.readdir(__dirname, (err, arquivos) => {
  console.log("Conteúdo da pasta...");
  console.log(arquivos);
});
