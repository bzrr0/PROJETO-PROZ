let emailContent = document.getElementById("email-text");
let emailInput = document.getElementById("email");

let passwordContent = document.getElementById("password-text");
let passwordInput = document.getElementById("password"); 

const  btnSubmit = document.getElementById("btn-submit");
let inputPreenchido = {
    e_mail: false,
    p_assword: false
};

passwordInput.addEventListener("blur", (e) => {
  let valor = e.target.value;
  if (valor == "") {
    passwordContent.innerText = "*Campo obrigatorio";
    estilizarInputIncorreto(passwordInput, passwordContent);
    inputPreenchido.p_assword = false;
  } else {
    estilizarInput(passwordInput, passwordContent);
    inputPreenchido.p_assword = true;
  }
});

emailInput.addEventListener("blur", (e) => {
  let valor = e.target.value;
  if (valor == "") {
    emailContent.innerText = "*Campo obrigatorio";
    estilizarInputIncorreto(emailInput, emailContent);
    inputPreenchido.e_mail = false;
  } else {
    estilizarInput(emailInput, emailContent);
    inputPreenchido.e_mail = true;
  }
});

btnSubmit.addEventListener("click", (evento) => {
    if (
      !inputPreenchido.e_mail ||
      !inputPreenchido.p_assword
    ) {
      evento.preventDefault();
      alert("Email ou senha nao foram preenchidos");
      console.log(inputPreenchido);
    } else {
      alert("Sucesso");
    }
  });

  function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
  }
  
  function estilizarInput(input, helper) {
    helper.classList.remove("visible");
    input.classList.remove("error");
  }
 