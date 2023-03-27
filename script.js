const sayCep = document.getElementById("sayCep");

async function getCep(){
    
    let sayYourCep = document.getElementById("field").value.replace("-","");
    const conditionCep = sayYourCep.lenght > 8
   if(sayYourCep !== ""  || !conditionCep){
    let res = await fetch( `https://viacep.com.br/ws/${sayYourCep}/json/`)
    let data = await res.json();
    adressCompleted.innerText = `${data.localidade} - ${data.uf} - ${data.bairro}`;   
    document.getElementById("field").value = "";
    }else{
        alert("Preencha por favor")
    }

}


