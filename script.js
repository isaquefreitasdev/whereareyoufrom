let sayYourCep = document.getElementById("cep_what").value;
const options = {
    mode: "no-cors",
    Headers: "Content-Type: application/json",
}
function getCep() {
  fetch(`https://viacep.com.br/ws/${sayYourCep}/json/`,options)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      validationAll();
      city.textContent = data.localidade;
    })
    .catch((err) => {
      console.log(err);
    });
}

function validationAll() {
  validationField();
  validationForm();
}

function validationField() {
  if (sayYourCep.value === "") {
    alert("Preencha os campos");
  }
}
