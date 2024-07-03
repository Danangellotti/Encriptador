const imagenLogo = document.getElementById("muñeco-img");
imagenLogo.style.display = "block";

const inputTexto = document.getElementById("texto-encryptar");

function encryptador() {
  const palabraOriginal = inputTexto.value;
  const palabraEncriptada = encriptar(palabraOriginal);
  mostrarResultado(palabraEncriptada);
}

function descryptador() {
  const palabraEncriptada = inputTexto.value;
  const palabraDesencriptada = desencriptar(palabraEncriptada);
  mostrarResultado(palabraDesencriptada);
}

function encriptar(palabra) {
  const letrasOriginales = ["e", "i", "a", "o", "u"];
  const letrasEncriptadas = ["enter", "imes", "ai", "ober", "ufat"];

  palabra = palabra.toLowerCase();

  let palabraEncriptada = "";

  for (let i = 0; i < palabra.length; i++) {
    const char = palabra[i];
    const index = letrasOriginales.indexOf(char);
    if (index !== -1) {
      palabraEncriptada += letrasEncriptadas[index];
    } else {
      palabraEncriptada += char;
    }
  }

  return palabraEncriptada;
}

function desencriptar(palabraEncriptada) {
  const letrasEncriptadas = ["enter", "imes", "ai", "ober", "ufat"];
  const letrasOriginales = ["e", "i", "a", "o", "u"];

  let palabraDesencriptada = palabraEncriptada;

  for (let i = 0; i < letrasEncriptadas.length; i++) {
    palabraDesencriptada = palabraDesencriptada
      .split(letrasEncriptadas[i])
      .join(letrasOriginales[i]);
  }

  return palabraDesencriptada;
}

function mostrarResultado(resultado) {
  imagenLogo.style.display = "none";
  const mensajesMostrar = document.querySelector(
    ".presentacion-mensajes-mostrar"
  );
  const textoImportante = mensajesMostrar.querySelector(
    ".texto-importante-mostrar"
  );
  const textoNoImportante = mensajesMostrar.querySelector(
    ".texto-no-importante-mostrar"
  );
  const botonCopiar = mensajesMostrar.querySelector(".boton-copiar");

  textoImportante.textContent = resultado;
  textoNoImportante.textContent = "Texto encriptado:";

  botonCopiar.style.display = "block";
}

function copiarTexto() {
  const textoACopiar = document.querySelector(
    ".texto-importante-mostrar"
  ).textContent;
  navigator.clipboard
    .writeText(textoACopiar)
    .then(() => {
      alert("Texto copiado!");
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
}
