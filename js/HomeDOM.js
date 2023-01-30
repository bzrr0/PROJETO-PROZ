const btnFrontContent = document.getElementById("front-end-content");
const btnBackContent = document.getElementById("back-end-content");
const btnCloudContent = document.getElementById("cloud-content");
const btnMachineContent = document.getElementById("machine-content");
const pageContent = document.getElementById("content-p");
const hiddenContainer = document.querySelector(".content-hidden")

const hiddenContent = document.getElementById("list");

// LISTA DE CURSOS //
let frontCourses = ["HTML", "CSS", "JavaScript", "Banco de Dados"];
let backCourses = ["Python", "Banco de Dados", "APIs", "Web Security"];
let cloudCourses = [
  "Armazenamento de dados",
  "Acesso remoto a recursos de hardware",
  "Pagamento por uso",
];
let machineCourses = ["Algoritmos", "Treinamento e avaliação"];

// FUNCAO PARA INCLLUSAO DOS CURSOS NA LISTA
function coursesAvaliable(materia) {
  hiddenContent.innerHTML = "";

  for (let i = 0; i < materia.length; i++) {
    let course = document.createElement("li");
    let a = document.createElement("a");
    a.href = "../page/under-construction.html";
    course.appendChild(a);
    a.innerHTML = materia[i];
    hiddenContent.appendChild(course);
  }

}

btnFrontContent.addEventListener("click", () => {
  pageContent.style.fontSize = "2rem";
  hiddenContainer.style.display = "block";
  pageContent.innerText =
    "Quem trabalha com Front End é responsável por desenvolver por meio do código uma interface gráfica e, normalmente, com as tecnologias base da Web: HTML, CSS e JavaScript.";
  coursesAvaliable(frontCourses);
});

btnBackContent.addEventListener("click", () => {
  pageContent.style.fontSize = "2rem";
  hiddenContainer.style.display = "block";
  pageContent.innerText =
    "O Back-End trabalha em boa parte dos casos fazendo a ponte entre os dados que vem do navegador rumo ao banco de dados e vice-versa, sempre aplicando as devidas regras de negócio, validações e garantias num ambiente restrito ao usuário final (ou seja, onde ele não consegue acessar ou manipular algo).";
  coursesAvaliable(backCourses);
});

btnCloudContent.addEventListener("click", () => {
  pageContent.style.fontSize = "2rem";
  hiddenContainer.style.display = "block";
  pageContent.innerText =
    "O cloud computing utiliza servidores remotos para conectar recursos de qualquer empresa a aparelhos de usuários. Nesse processo, o servidor fica encarregado de armazenar todos os dados e sistemas necessários para pessoas e empresas em qualquer lugar do mundo.";
  coursesAvaliable(cloudCourses);
});

btnMachineContent.addEventListener("click", () => {
  pageContent.style.fontSize = "2rem";
  hiddenContainer.style.display = "block";
  pageContent.innerText =
    "O especialista em Machine Learning é o responsável por criar cálculos que simulam o processo de decisão do cérebro de quem assiste aos filmes ou escuta as músicas. Para isso, ele irá trabalhar no processo de coleta de dados, entendimento dos padrões e, por fim, na inserção dessas informações no sistema.";
  coursesAvaliable(machineCourses);
});
