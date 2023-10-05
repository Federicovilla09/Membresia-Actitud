const formulario = document.getElementById("formulario");

const labelNombre = document.createElement("label");
labelNombre.textContent = "Nombre";
formulario.appendChild(labelNombre);

//Crear input para ingreso de nombre del usuario
const inputNombre = document.createElement("input"); //crea un elemento html con el tag <input>
inputNombre.setAttribute("type", "text"); //asignamos atributos al nodo creado
inputNombre.setAttribute("name", "nombreUsuario"); //se asignan los valores a cada uno de sus atributos
inputNombre.setAttribute("placeholder", "Nombre");
formulario.appendChild(inputNombre);

const labelApellido = document.createElement("label");
labelApellido.textContent = "Apellido";
formulario.appendChild(labelApellido);

const inputApellido = document.createElement("input");
inputApellido.setAttribute("type", "text");
inputApellido.setAttribute("name", "nombreUsuario");
inputApellido.setAttribute("placeholder", "Apellido");
formulario.appendChild(inputApellido);

const numeroDocumento = document.createElement("label");
numeroDocumento.textContent = "Numero Documento:";
formulario.appendChild(numeroDocumento);

const inputNumDocu = document.createElement("input");
inputNumDocu.setAttribute("type", "number");
inputNumDocu.setAttribute("min", 10000000);
inputNumDocu.setAttribute("max", 99999999);
inputNumDocu.setAttribute("step", 1);
inputNumDocu.setAttribute("placeholder", " - ");
formulario.appendChild(inputNumDocu);

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

  // Crear un objeto con los datos
  const datosUsuario = {
    nombre: nombre,
    apellido: apellido,
    numDocumento: numDocumento,
  };

  // Guardar los datos en localStorage
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("apellido", apellido);
  localStorage.setItem("numDocumento", numDocumento);

  // Puedes también limpiar los campos del formulario si es necesario
  inputNombre.value = "";
  inputApellido.value = "";
  inputNumDocu.value = "";

  alert("Datos enviados correctamente y guardados.");
}

