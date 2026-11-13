// Sistema de Registro de Incidencias - v1.0.0
// Registro y listado de incidencias (datos guardados en localStorage)

const CLAVE = "incidencias";

function obtenerIncidencias() {
  try {
    return JSON.parse(localStorage.getItem(CLAVE)) || [];
  } catch (e) {
    return [];
  }
}

function guardarIncidencias(lista) {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(lista));
  } catch (e) {
    console.error("No se pudo guardar", e);
  }
}

function mostrarIncidencias() {
  const lista = obtenerIncidencias();
  const tabla = document.getElementById("tabla-incidencias");
  const sinDatos = document.getElementById("sin-datos");

  tabla.innerHTML = "";
  sinDatos.style.display = lista.length === 0 ? "block" : "none";

  lista.forEach(function (inc, i) {
    const fila = document.createElement("tr");
    [i + 1, inc.titulo, inc.descripcion, inc.prioridad, inc.estado, inc.fecha]
      .forEach(function (valor) {
        const celda = document.createElement("td");
        celda.textContent = valor;
        fila.appendChild(celda);
      });
    tabla.appendChild(fila);
  });
}

document.getElementById("form-incidencia").addEventListener("submit", function (e) {
  e.preventDefault();

  const incidencia = {
    titulo: document.getElementById("titulo").value.trim(),
    descripcion: document.getElementById("descripcion").value.trim(),
    prioridad: document.getElementById("prioridad").value,
    estado: document.getElementById("estado").value,
    fecha: new Date().toLocaleDateString("es-EC")
  };

  const lista = obtenerIncidencias();
  lista.push(incidencia);
  guardarIncidencias(lista);

  e.target.reset();
  mostrarIncidencias();
});

mostrarIncidencias();
