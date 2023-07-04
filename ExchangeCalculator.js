function convertir() {
  let tasas = {
    USD: 490,
    PESO: 1,
    EURO: 600,
  };

  let indice = document.formul.selectPri.selectedIndex;
  let MonedaInicial = document.formul.selectPri.options[indice].text;
  
  let indice2 = document.formul.selectLast.selectedIndex;
  let MonedaFinal = document.formul.selectLast.options[indice2].text;
  
  console.log(MonedaInicial + " monedaInicial");
  console.log(MonedaFinal + " monedaFinal");
  

  let tipoMonedaA = tasas[MonedaInicial];
  let tipoMonedaB = tasas[MonedaFinal];

  let cantidadInput = document.getElementById("entrada").value;
  let cantidad = parseFloat(cantidadInput);

  let tipoMoneda1 = parseFloat(tipoMonedaA);
  let tipoMoneda2 = parseFloat(tipoMonedaB);

  console.log(tipoMoneda1);
  console.log(tipoMoneda2);

  let resultado = ((cantidad * tipoMoneda1) / tipoMoneda2).toFixed(2);

  document.getElementById("salida").style.display="show";
  document.getElementById("salida").style.display="inherit";
  document.getElementById("salida").innerHTML = resultado;
}
