$(document).ready(function(){
  var messaggio = $(".sent.template").clone();

  $(".fa-microphone").click(function(){

    $(".recived").next().addClass("active");
  })

});
