function convertir() {

  let entrada = document.getElementById("celsius").value;

  // convertir a número
  let celsius = Number(entrada);

  // validar si es número
  if (isNaN(celsius)) {
    alert("❌ Error: Debe ingresar un número válido");
    return;
  }

  // conversiones
  let kelvin = celsius + 273.15;
  let fahrenheit = (celsius * 9/5) + 32;

  // mostrar resultados
  console.log("Grados Kelvin:", kelvin);
  console.log("Grados Fahrenheit:", fahrenheit);

  document.getElementById("resultado").innerHTML =
    `Grados Kelvin: ${kelvin}<br>
     Grados Fahrenheit: ${fahrenheit}`;
}