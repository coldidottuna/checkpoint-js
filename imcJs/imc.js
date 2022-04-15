let button = document.getElementById("btn");
//
button.addEventListener("click", () => {
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const result = document.getElementById("output");
  let heigthStatus = false,
    weightStatus = false;

  if (height === "" || isNaN(height) || height <= 0) {
    document.getElementById("heightSpan").innerHTML =
      "Entrer une valeur valide";
  } else {
    document.getElementById("heightSpan").innerHTML = "";
    heigthStatus = true;
  }

  if (weight === "" || isNaN(weight) || weight <= 0) {
    document.getElementById("weightSpan").innerHTML =
      "Entrer une valeur valide";
  } else {
    document.getElementById("weightSpan").innerHTML = "";
    weightStatus = true;
  }

  if (heigthStatus && weightStatus) {
    const imc = (weight / (height ** 2 / 10000)).toFixed(2);

    if (imc < 18.6) {
      result.innerHTML = "en sous-poids :" + imc;
    } else if (imc >= 18.6 && imc < 24.9) {
      result.innerHTML = "poids normal :" + imc;
    } else {
      result.innerHTML = "en surpoids :" + imc;
    }
  } else {
    alert("Erreur");
    result.innerHTML = "";
  }
});
