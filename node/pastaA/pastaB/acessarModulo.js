const moduloA = require("../../moduloA");
console.log(moduloA.ola);

const c = require("./pastaC/index"); //com o arquivo no padrão de index poderia ser apenas './pastaC'
console.log(c.ola2);

// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.write("Bom dia !");
//     res.end();
//   })
//   .listen(8080);
