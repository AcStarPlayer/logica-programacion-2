function convertir() {

  let valor = document.getElementById("valor").value;
  let entrada = document.getElementById("entrada").value;

  let numero = Number(valor);

  // VALIDAR NUMERO
  if (isNaN(numero)) {
    alert("❌ Debe ingresar un número válido");
    return;
  }

  //CHECKBOX 
  let checks = document.querySelectorAll('input[name="salida"]:checked');

  if (checks.length === 0) {
    alert("⚠️ Seleccione al menos una salida");
    return;
  }

  let celsius;

  // convertir a Celsius
  if (entrada === "celsius") {
    celsius = numero;
  }

  if (entrada === "fahrenheit") {
    celsius = (numero - 32) * 5 / 9;
  }

  if (entrada === "kelvin") {
    celsius = numero - 273.15;
  }

  let fahrenheit = (celsius * 9 / 5) + 32;
  let kelvin = celsius + 273.15;

  let resultado = "";

  // RECORRE CHECKBOX
  checks.forEach(check => {

    if (check.value === "celsius") {
      resultado += `🌡️ Celsius: ${celsius.toFixed(2)} °C <br>`;
    }

    if (check.value === "fahrenheit") {
      resultado += `🔥 Fahrenheit: ${fahrenheit.toFixed(2)} °F <br>`;
    }

    if (check.value === "kelvin") {
      resultado += `❄️ Kelvin: ${kelvin.toFixed(2)} K <br>`;
    }

  });

  // CAMBIO CLIMA CON MOVIMIENTO

  document.body.classList.remove("frio","templado","calor");

  let tipoClima;
  let particula;

  if (celsius < 10) {
    tipoClima = "frio";
    particula = "❄️";
  }
  else if (celsius <= 25) {
    tipoClima = "templado";
    particula = "🌤️";
  }
  else {
    tipoClima = "calor";
    particula = "🔥";
  }

  document.body.classList.add(tipoClima);

  crearAnimacion(particula);

  document.getElementById("resultado").innerHTML = resultado;
}

function crearAnimacion(icono){

  const contenedor = document.getElementById("climaAnimacion");
  contenedor.innerHTML = "";

  for(let i=0;i<15;i++){

    const part = document.createElement("div");
    part.className = "particula";
    part.innerHTML = icono;

    part.style.left = Math.random()*100+"%";
    part.style.top = "-10vh";
    part.style.animationDelay = Math.random()*3+"s";
    part.style.animationDuration = (3+Math.random()*4)+"s";
    part.style.fontSize = (18+Math.random()*25)+"px";

    contenedor.appendChild(part);
  }
}

// LOADER DE INICIO

window.addEventListener("load", () => {

  setTimeout(() => {

    document.getElementById("loader")
      .classList.add("oculto");

    const skeleton = document.getElementById("skeleton");
    if(skeleton) skeleton.style.display="none";

  }, 2000);

});