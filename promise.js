//on a une fonction qui utilise un mecanisme de callback: fs.readFile .
//On veut appeler cette fonction mais on prefererait manipuler un objet 'promise' en retour.
//Comment créer une version 'promisifiée' de cette fonction ?

const fs = require("fs");

function pReadFile(path, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, options, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

pReadFile("texte.js", "utf8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
