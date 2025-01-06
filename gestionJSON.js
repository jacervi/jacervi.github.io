//Lectura de ficheros JSON
function leeJSON() {
  const fs = require(["fs"]);
  let data = fs.readFileSync("documentos.json");
  //console.log(data)
  let documento = JSON.parse(data);
  return (documento)
}
//MOdificación de archivos JSON
function modificaJSON(tema1, nombre) {
  //leeJSON();

  const fs = require("fs");
  let data = fs.readFileSync("documentos.json");
  //console.log(data)
  let documento = JSON.parse(data);
  documento.documentos[3].tema = tema1
  documento.documentos[3].titulo = nombre;
  fs.writeFileSync("documentos1.json", JSON.stringify(documento));
  console.log(documento);
  
  //Número de elementos en JSON
  console.log(documento.documentos.length)
}

modificaJSON("C++", "Esta es otra prueba de título");
