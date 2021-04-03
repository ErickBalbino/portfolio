$(document).ready(function() {
    var botao = $('.btn'); //classe do a(link) que vai ser clicado
    var dropDown = $('.sublista');    //classe do a(link) que vai ser aberto
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
});