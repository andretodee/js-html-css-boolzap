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

      setTimeOut(rispostaComputer, 3000);
    }


  });


    //trovo il click
  $(".input-text-left").keyup(function(){
    //recupero il testo inserito nella ricerca
    var nome = $(this).val();
    console.log(nome);
    if(nome.length != 0){

      $(".name").each(function(){
        //ricavo il nome ricercato
        var nomeContact = $(this).find(".contact").text();
        nome = nome.toLowerCase();
        nomeContact = nomeContact.toLowerCase();
        //controllo se il nome inserito e presente nei contatti
        if(nome.includes(nomeContact)){
          //se lo è mostro il contatto
          $(this).show(".name");
        } else {
          //se non lo è lo nascondo

          $(this).hide(".name");
        }
      });

    } else {
      //se non c'è nessuna ricerca mostro tutti i contatti
        $(".name").show();
    }
  });

  function rispostaComputer(){

      //clono il template del nuovoMessaggio
      var messaggioRisposta = $(".template").clone();
      //inserisco nel giusto span il testo del messaggioRisposta
      messaggioRisposta.children(".message-text").text("ok");
      //aggiungo al div template la classe recived
      $(".template").addClass("recived");
      //inserisco il messaggio all'interno del container
      $(".chat-container").append(messaggioRisposta);
  }


});
