


function getCep(){
    let sayYourCep = document.getElementById("cep_what").value
    fetch( `https://viacep.com.br/ws/${sayYourCep}/json/`,)
    .then((response) =>{
        return response.json()
    }).then((data)=>{
        console.log(data.bairro)
    }).catch((err)=>{
        console.log(err);
    })
   
}
