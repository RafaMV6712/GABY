$(document).ready(function(){
	$("#mostrar_formulario_consumir").click(function(){
    	$("#consumir_form").slideToggle();
  	});
});
$(function(){
    $('#slider div:gt(0)').hide();
    setInterval(function(){
     	$('#slider div:first-child').fadeOut(0)
        	.next('div').fadeIn(2000)
        	.end().appendTo('#slider');}, 6000);
});