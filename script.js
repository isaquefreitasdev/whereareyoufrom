const sayCep = document.getElementById("sayCep")
async function getCep(){
    
    let sayYourCep = document.getElementById("field").value;
    const conditionCep = sayYourCep.lenght > 8
   if(sayYourCep !== ""  || !conditionCep){
    let res = await fetch( `https://viacep.com.br/ws/${sayYourCep}/json/`)
    let data = await res.json();
    city.innerText = data.localidade;   
    document.getElementById("field").value = "";
    }else{
        alert("Preencha por favor")
    }

}



