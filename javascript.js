

menuAberto = false;
function alternarMen(){
  var links = document.getElementById('men');
  if(menuAberto){
    //links.style.display = "none";
    links.classList.remove("men-aberto");
  }else{
    //links.style.display = "flex";
    links.classList.add("men-aberto");
  }
  menuAberto = !menuAberto;
}


function fecharMenu(){
  var links = document.getElementById('men');
  links.style.display = "none";
  //alert(links);
}



//Referente às ancoras da página
document.querySelectorAll('[data-ancora]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      //fecharMenu();
      document.getElementById(this.getAttribute('data-ancora')).scrollIntoView({
          behavior: 'smooth', block: 'start', inline: 'nearest'
      });
  });
});

