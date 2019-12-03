$(document).ready(function(){

  //invio del messaggio

  //intercetto il click
  $(".fa-microphone").click(function(){

    //recupero il contenuto dell'input del messaggio
    var testoMessaggio = $(".text-input").val();
    console.log(testoMessaggio);
    if(testoMessaggio.length != 0){
      console.log(testoMessaggio.length);

      //clono il template del messaggio
      var nuovoMessaggio = $(".sent.template").clone();
      console.log(nuovoMessaggio);

      //inserisco nel giusto span il testo del messaggio
      nuovoMessaggio.children(".message-text").text(testoMessaggio);

      //aggiungo al div message la classe sent
      nuovoMessaggio.removeClass("template");

      //inserisco il messaggio all'interno del container
      $(".chat-container").append(nuovoMessaggio);

      //resetto l'input con una stringa vuota
      var testoMessaggio = $(".right-bottom-text input").val("");

      setTimeOut(function(){
        $(".answer").addClass(".active");

      }, 3000);
    }

  };
  });
    //trovo il click
  $(".ricerca").click(function(){
    //recupero il testo inserito nella ricerca
    var nome =$(".input-text-left").val();
    console.log(nome);
    if(nome.length != 0){

      $(".contact").each(function(){
        //ricavo il nome ricercato
        var nomeContact = $(this).text();
        //controllo se il nome inserito e presente nei contatti
        if(nome.toLowerCase().includes(nomeContact).toLowerCase()){ //(errore)!!
          //se lo è mostro il contatto
          $(this).show(".name-text");
        } else {
          //se non lo è lo nascondo

          $(this).hide(".name-text");
        }
      });

    } else {
      //se non c'è nessuna ricerca mostro tutti i contatti
      $(".name-text").show();
    }
});





});
