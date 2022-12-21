function pesquisar(){
    var input,filtro,menu,menuItens,links;
    input = document.getElementById("pesquisa");
    filtro = input.value.toUpperCase();
    menu = document.getElementById("menu");
    menuItens = menu.getElementsByTagName("li");
    for(var i=0;i<menuItens.length;i++){
      links = menuItens[i].getElementsByTagName("a")[0];
      if(links.innerHTML.toUpperCase().indexOf(filtro)>-1){
        menuItens[i].style.display="";
      }else{
        menuItens[i].style.display="none";
      }
    }
  }
function abrirNav(){
    document.getElementById("menuOculto").style.width="250px";
    document.getElementById("principal").style.marginLeft="250px";
}
function fecharNav(){
    document.getElementById("menuOculto").style.width="0";
    document.getElementById("principal").style.marginLeft="0";
}