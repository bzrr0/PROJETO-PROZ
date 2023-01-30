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
ageInput.addEventListener("change", (e) => {
  let valor = e.target.value;
  const idadeMinima = 15;

  if (valor < idadeMinima) {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    ageHelper.innerText =
      "Você precisa ter a partir de 16 anos para realizar o cadastro";
    estilizarInputIncorreto(ageInput, ageHelper);
    inputCorretos.age = false;
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(ageInput, ageHelper);
    inputCorretos.age = true;
  }
});

// ---------- VALIDAÇÃO NOME ---------- //
let nameInput = document.getElementById("name");
let nameHelper = document.getElementById("name-text");

// Validar valor do input
nameInput.addEventListener("change", (e) => {
  let valor = e.target.value;
  const regex = /^[a-zA-Z]+$/;

  if (!regex.test(valor)) {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    nameHelper.innerText = "O campo nome aceita apenas letras";
    estilizarInputIncorreto(nameInput, nameHelper);
    inputCorretos.name = false;
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(nameInput, nameHelper);
    inputCorretos.name = true;
  }
});

// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameHelper = document.getElementById("username-text");

usernameInput.addEventListener("change", (e) => {
  let valor = e.target.value;
  const caracteres = 4;

  if (valor.length < caracteres) {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    usernameHelper.innerText = "Username precisa conter no minimo 5 caracteres";
    estilizarInputIncorreto(usernameInput, usernameHelper);
    inputCorretos.username = false;
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameHelper);
    inputCorretos.username = true;
  }
});

// ---------- VALIDAÇÃO EMAIL ---------- //

let emailInput = document.getElementById("email");
let emailHelper = document.getElementById("email-text");

emailInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (valor.includes("@") && valor.includes(".com")) {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(emailInput, emailHelper);
    inputCorretos.email = true;
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
    inputCorretos.email = false;
  }
});

// ---------- VALIDAÇÃO PASSWORD ---------- //
let passwordInput = document.getElementById("password");
let passwordHelper = document.getElementById("password-text");

passwordInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  const regex =
    /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?!.[@$!%?&])[A-Za-z\d@$!%?&]{6,9}$/;
  const regexEspecial = `[!?@#$%&]`;
  const regexMaiscula = `[A-Z]`;
  const regexMinuscula = `[a-z]`;
  const regexNumero = `[0-9]`;

  const caracteresMin = 6;
  const caracteresMax = 9;
  
  /* inputCorretos.password = false; */
  console.log(valor);

  if (valor.length < caracteresMin) {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    passwordHelper.innerText = "Senha precisa conter no minimo 6 caracteres";
    estilizarInputIncorreto(passwordInput, passwordHelper);
    /* inputCorretos.password = false; */
  } else if (valor.length > caracteresMax) {
    passwordHelper.innerText = "Senha precisa conter no máximo 9 caracteres.";
    estilizarInputIncorreto(passwordInput, passwordHelper);
    /* inputCorretos.password = false; */
  } else if (!valor.match(regexEspecial)) {
    passwordHelper.innerText = "Senha precisa conter um caracter especial";
    estilizarInputIncorreto(passwordInput, passwordHelper);
    /* inputCorretos.password = false; */
  } else if (!valor.match(regexMaiscula)) {
    passwordHelper.innerText = "Senha precisa conter uma letra maiscula.";
    estilizarInputIncorreto(passwordInput, passwordHelper);
    /* inputCorretos.password = false; */
  } else if (!valor.match(regexMinuscula)) {
    passwordHelper.innerText = "Senha precisa conter uma letra minuscula.";
    estilizarInputIncorreto(passwordInput, passwordHelper);
    /* inputCorretos.password = false; */
  } else if (!valor.match(regexNumero)) {
    passwordHelper.innerText = "Senha precisa conter um numero";
    estilizarInputIncorreto(passwordInput, passwordHelper);
    /* inputCorretos.password = false; */
  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(passwordInput, passwordHelper);
    inputCorretos.password = true;
  }
});

// ---------- VALIDAÇÃO FORMULARIO ---------- //

const btnSubmit = document.querySelector("form > button");
let inputCorretos = {
  age: false,
  name: false,
  username: false,
  email: false,
  password: false,
};

btnSubmit.addEventListener("click", (evento) => {
  if (
    !inputCorretos.age ||
    !inputCorretos.name ||
    !inputCorretos.username ||
    !inputCorretos.email ||
    !inputCorretos.password
  ) {
    evento.preventDefault();
    alert("Um dos campos do formulario nao esta correto.");
    console.log(inputCorretos);
  } else {
    alert("Formulario enviado com sucesso");
  }
});
