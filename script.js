const formulario = document.getElementById("formulario");

//Label e Input Nombre
const labelNombre = document.createElement("label");
labelNombre.textContent = "Nombre";
labelNombre.style.fontWeight = "bold";
formulario.appendChild(labelNombre);

const inputNombre = document.createElement("input");
inputNombre.setAttribute("type", "text"); 
inputNombre.setAttribute("name", "nombreUsuario");
inputNombre.setAttribute("placeholder", "Nombre");
formulario.appendChild(inputNombre);

const saltoLineaNombre = document.createElement("br");
formulario.appendChild(saltoLineaNombre);

//Label e Input Apellido
const labelApellido = document.createElement("label");
labelApellido.textContent = "Apellido";
labelApellido.style.fontWeight = "bold";
formulario.appendChild(labelApellido);

const inputApellido = document.createElement("input");
inputApellido.setAttribute("type", "text");
inputApellido.setAttribute("name", "apellidoUsuario");
inputApellido.setAttribute("placeholder", "Apellido");
formulario.appendChild(inputApellido);

const saltoLineaApellido = document.createElement("br");
formulario.appendChild(saltoLineaApellido);

//Label e Input Documento
const numeroDocumento = document.createElement("label");
numeroDocumento.textContent = "Numero Documento:";
numeroDocumento.style.fontWeight = "bold";
formulario.appendChild(numeroDocumento);

const inputNumDocu = document.createElement("input");
inputNumDocu.setAttribute("type", "number");
inputNumDocu.setAttribute("min", 10000000);
inputNumDocu.setAttribute("max", 99999999);
inputNumDocu.setAttribute("step", 1);
inputNumDocu.setAttribute("placeholder", " - ");
formulario.appendChild(inputNumDocu);

const saltoLineaDocumento = document.createElement("br");
formulario.appendChild(saltoLineaDocumento);

//Boton
const saltoLineaBoton = document.createElement("br");
formulario.appendChild(saltoLineaBoton);

const botonEnviar = document.createElement("button");
botonEnviar.innerHTML = "Enviar";
formulario.appendChild(botonEnviar);
botonEnviar.addEventListener("click", enviarDatos);


//hacer que los datos ingresados se guarden en localStorage
function enviarDatos() {

  const nombre = inputNombre.value;
  const apellido = inputApellido.value;
  const numDocumento = inputNumDocu.value;

  if (nombre === "" || apellido === "" || numDocumento === "") {
    alert("Completar todos los campos por favor.");
    return;
  }

  // Guardar los datos en localStorage
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("apellido", apellido);
  localStorage.setItem("numDocumento", numDocumento);

  // limpiar los campos del formulario si es necesario
  inputNombre.value = "";
  inputApellido.value = "";
  inputNumDocu.value = "";

  alert("Datos enviados correctamente y guardados.");
}

console.log(localStorage.getItem("nombre"));
console.log(localStorage.getItem("apellido"));
console.log(localStorage.getItem("numDocumento"));
