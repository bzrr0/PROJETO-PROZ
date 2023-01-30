const btnFrontContent = document.getElementById("front-end-content");
const btnBackContent = document.getElementById("back-end-content");
const btnCloudContent = document.getElementById("cloud-content");
const btnMachineContent = document.getElementById("machine-content");
const pageContent = document.getElementById("content-p");

btnFrontContent.addEventListener("click", () => {
  pageContent.style.fontSize = "2rem";
  pageContent.innerText =
    "Quem trabalha com Front End é responsável por desenvolver por meio do código uma interface gráfica e, normalmente, com as tecnologias base da Web: HTML, CSS e JavaScript.";
});

btnBackContent.addEventListener("click", () => {
  pageContent.style.fontSize = "2rem";
  pageContent.innerText =
    "O Back-End trabalha em boa parte dos casos fazendo a ponte entre os dados que vem do navegador rumo ao banco de dados e vice-versa, sempre aplicando as devidas regras de negócio, validações e garantias num ambiente restrito ao usuário final (ou seja, onde ele não consegue acessar ou manipular algo).";
});

btnCloudContent.addEventListener("click", () => {
    pageContent.style.fontSize = "2rem";
    pageContent.innerText =
      "O cloud computing utiliza servidores remotos para conectar recursos de qualquer empresa a aparelhos de usuários. Nesse processo, o servidor fica encarregado de armazenar todos os dados e sistemas necessários para pessoas e empresas em qualquer lugar do mundo.";
  });

  btnMachineContent.addEventListener("click", () => {
    pageContent.style.fontSize = "2rem";
    pageContent.innerText =
      "O especialista em Machine Learning é o responsável por criar cálculos que simulam o processo de decisão do cérebro de quem assiste aos filmes ou escuta as músicas. Para isso, ele irá trabalhar no processo de coleta de dados, entendimento dos padrões e, por fim, na inserção dessas informações no sistema.";
  });