const sayCep = document.getElementById("sayCep");
const adressCompleted = document.getElementById("adressCompleted");

async function getCep() {
  
  let sayYourCep = document.getElementById("field").value.replace("-", "");
  const conditionCep = sayYourCep.lenght > 8;
  
  if (sayYourCep === "") {
    alert("Preencha campos")
    adressCompleted.classList.remove("display")
  } else {
    let res = await fetch(`https://viacep.com.br/ws/${sayYourCep}/json/`);
    let data = await res.json();
    if (data.erro) {
      alert("CEP não encontrado");
      adressCompleted.classList.remove("display")
    } else if(data.bairro === "") {
      adressCompleted.classList.add("display")
      
      adressCompleted.innerText = `${data.localidade} - ${data.uf}`;
    }else{
      adressCompleted.classList.add("display")
      
      adressCompleted.innerText = `${data.localidade} - ${data.uf} | ${data.bairro}`;


    }

    document.getElementById("field").value = "";
  }
  
}
