function getCep(){

    let sayYourCep = document.getElementById("cep_what").value;
    if(sayYourCep === ""){
        alert("Preencha os campos");
        return;
    }
    fetch( `https://viacep.com.br/ws/${sayYourCep}/json/`)
    .then((response) =>{
        return response.json()
    }).then((data)=>{
      
            city.textContent = data.bairro;
    }).catch((err)=>{
        console.log(err);
    })
}