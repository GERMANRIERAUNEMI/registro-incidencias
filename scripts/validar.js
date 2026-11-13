// Validación simple usada por GitHub Actions
const fs = require("fs");

const archivos = ["index.html", "styles.css", "app.js"];
let ok = true;

archivos.forEach(function (archivo) {
  if (!fs.existsSync(archivo)) {
    console.error("FALTA: " + archivo);
    ok = false;
  } else {
    console.log("OK: " + archivo);
  }
});

if (ok) {
  const html = fs.readFileSync("index.html", "utf8");
  ["form-incidencia", "tabla-incidencias", "app.js"].forEach(function (id) {
    if (!html.includes(id)) {
      console.error("index.html no contiene: " + id);
      ok = false;
    }
  });
}

if (!ok) {
  console.error("Validación fallida");
  process.exit(1);
}
console.log("Validación exitosa");
