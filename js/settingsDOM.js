

let button = document.querySelector("button");
let inputName = document.querySelector("#name");
let helperNome = document.getElementById("helperNome");
let inputPassword = document.querySelector("#password");
let helperSenha = document.getElementById("helperSenha")
let inputEmail = document.querySelector("#email");
let helperEmail = document.getElementById("helperEmail");

console.log(helperEmail);

/*tratamento para evitar envio de formulario vazio */
button.addEventListener("click", (e)=>{

    if(!inputName.value || !inputPassword.value || !inputEmail.value || !inputEmail.value.valueincludes("@")){
        e.preventDefault();
        alert("Preencha todos campos corretamente.");
        
        return;
    }else{
        alert("Dados salvos com sucesso.");
    }
        
})
/*Validação do nome  */

inputName.addEventListener("blur", (e)=>{
    let valor = e.target.value.trim();
    const regex = /^[a-zA-Z]+$/;
    if(!valor || valor.length < 4 || !regex.test(valor)){
        inputName.classList.add("inputForm_erro");
        inputName.classList.remove("inputForm_correcto");
        helperNome.innerText = "'Porfavor digite um nome válido'";

    }else{
        inputName.classList.add("inputForm_correcto");
        inputName.classList.remove("inputForm_erro");
        helperNome.innerText = "";
    }
})
/* Validação de senha */

inputPassword.addEventListener("blur", (e)=>{
    let valor = e.target.value.trim();

    if(!valor || valor.length < 8 ){
        inputPassword.classList.add("inputForm_erro");
        inputPassword.classList.remove("inputForm_correcto");
        helperSenha.innerText = "'Porfavor digite no mínimo 8 caracteres'";

    }else{
        inputPassword.classList.add("inputForm_correcto");
        inputPassword.classList.remove("inputForm_erro");
        helperSenha.innerText = "";
    }
})
/* validação do Email */

inputEmail.addEventListener("blur", (e)=>{
    let valor = e.target.value.trim();
    if((!valor) || (!valor.includes("@")) || (!valor.includes(".com"))){
        inputEmail.classList.add("inputForm_erro");
        inputEmail.classList.remove("inputForm_correcto");
        helperEmail.innerText = "'Porfavor digite um email válido'";
       
    }else{
        inputEmail.classList.add("inputForm_correcto");
        inputEmail.classList.remove("inputForm_erro");
        helperEmail.innerText = ""
    }
})
