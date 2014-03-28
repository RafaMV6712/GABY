
$(document).ready(function()
	{
		$("#mostrar_formulario_consumir").click(function()
		{
    		$("#consumir_form").slideToggle();
  	 });
    $("#Registrarme_Academia").click(function()
    {
      $('#popup').fadeIn('slow');
      $('#Login').css( "opacity", ".5");
      return false;
    });
    
    $('#Cancelar').click(function(){
      $('#popup').fadeOut('slow');
      $('#Login').css( "opacity", "1");
      return false;
    });
  }
);
$(function()
{
  $('#slider div:gt(0)').hide();
    setInterval(function()
      {
      $('#slider div:first-child').fadeOut(0)
          .next('div').fadeIn(2000)
          .end().appendTo('#slider');
        } , 6000);
});

 