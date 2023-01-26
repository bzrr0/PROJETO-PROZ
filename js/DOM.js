function estilizarInputCorreto(input, helper) {
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
  }
  
  function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
  }

// ---------- VALIDAÇÃO IDADE ---------- //
let ageInput = document.getElementById("age");
let ageHelper = document.getElementById("age-text");

// Validar valor do input
ageInput.addEventListener("change", (e)=> {
  let valor = e.target.value
  const idadeMinima = 15;

  if(valor < idadeMinima){
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    ageHelper.innerText = "Você precisa ter a partir de 16 anos para realizar o cadastro";
    estilizarInputIncorreto(ageInput, ageHelper)
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(ageInput, ageHelper);
  }
})

// ---------- VALIDAÇÃO NOME ---------- //
let nameInput = document.getElementById("name");
let nameHelper = document.getElementById("name-text");

// Validar valor do input
/* ageInput.addEventListener("change", (e)=> {
  let valor = e.target.value;
 NOME nao pode aceitar numero e nem caracter especial
  if(valor < idadeMinima){
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    ageHelper.innerText = "Você precisa ter a partir de 16 anos para realizar o cadastro";
    estilizarInputIncorreto(ageInput, ageHelper)
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameHelper);
  }
}) */

// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameHelper = document.getElementById("username-text");

usernameInput.addEventListener("change", (e)=> {
    let valor = e.target.value
    const caracteres = 4;
  
    if(valor.length < caracteres){
      // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
      usernameHelper.innerText = "Username precisa conter no minimo 5 caracteres";
      estilizarInputIncorreto(usernameInput, usernameHelper)
    } else {
      // Adicionar estilos dinâmicos se o valor estiver correto
      estilizarInputCorreto(usernameInput, usernameHelper);
    }
  })
// Validar valor do input

let emailInput = document.getElementById("email");
let emailHelper = document.getElementById("email-text");

emailInput.addEventListener("change", (e)=> {
    let valor = e.target.value
  
    if(valor.includes("@") && valor.includes(".com")){
      // Adicionar estilos dinâmicos se o valor estiver correto
      estilizarInputCorreto(emailInput, emailHelper);
    } else {
      // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
      emailHelper.innerText = "Precisa inserir um email válido";
      estilizarInputIncorreto(emailInput, emailHelper);
    }
  })

  // ---------- VALIDAÇÃO USERNAME ---------- //
let passwordInput = document.getElementById("password");
let passwordHelper = document.getElementById("password-text");

passwordInput.addEventListener("change", (e)=> {
    let valor = e.target.value
  //UTILIZAR  REGEX
/*     if(valor.length < caracteres){
      // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
      usernameHelper.innerText = "Username precisa conter no minimo 5 caracteres";
      estilizarInputIncorreto(usernameInput, usernameHelper)
    } else {
      // Adicionar estilos dinâmicos se o valor estiver correto
      estilizarInputCorreto(usernameInput, usernameHelper);
    } */
  })



