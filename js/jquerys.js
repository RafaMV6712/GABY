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

 