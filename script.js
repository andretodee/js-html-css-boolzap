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

      setTimeout(rispostaComputer, 1000);
    }


  });


    //trovo il click
  $(".input-text-left").keyup(function(){
    //recupero il testo inserito nella ricerca
    var nome = $(this).val();

    if(nome.length != 0){

      $(".name").each(function(){

        //ricavo il nome ricercato
        var nomeContact = $(this).find(".contact").text();

        nome = nome.toLowerCase();
        nomeContact = nomeContact.toLowerCase();
        //controllo se il nome inserito e presente nei contatti
        if(nomeContact.includes(nome)){
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
      var messaggioRisposta = $(".sent.template").clone();

      //inserisco nel giusto span il testo del messaggioRisposta
      messaggioRisposta.children(".message-text").text("ok");

      //aggiungo al div template la classe recived
      messaggioRisposta.removeClass("sent");
      messaggioRisposta.removeClass("template");
      messaggioRisposta.addClass("recived");
      console.log(messaggioRisposta);
      //inserisco il messaggio all'interno del container
      $(".chat-container").append(messaggioRisposta);
  }


  //creo un div differente per ogni contatto nell'html
  //imposto ogni conversazionenascosta di default
  $(".conversazione").hide();
  //imposto aperta solo la conversazionedi michele di default
  $('.conversazione[data-nome="Michele"]').show();
  //imposto il click del contatto
  $(".name").click(function(){
      //nascondo ogni sent template presente
      // $(".sent.template").hide();
      //trovo il nome del contatto cliccato
      var nomeConve = $(this).find(".contact").text();
      console.log(nomeConve);
      //nascondo altri eventuali contatti già visibili in pagina
      $(".conversazione").hide();
      //mostro la conversazione del contatto cliccato
      $('.conversazione[data-nome="' + nomeConve + '"]').show();
      //cambio il nome del contatto della conversazione
      $(".name-text-tre").children("h3").text(nomeConve);



  });


  //imposto il dropdown sull'html
  //intercetto il clic sull'icona della freccia in giu nel messaggio
  //tramite il document on aggiungo il mio template all'html
  $(document).on('click', '.fa-angle-down', function(){
      //a questo messaggio seleziono il fratello con classe dropdown
      //aggiungo e rimuovo (toggle) la classe active dal fratello dropdown
      $(this).siblings(".dropdown").toggleClass("active");
  })

 //intercetto il clic sulla voce delete
  $(document).on('click', '.delete', function(){

      $(this).closest(".sent").hide();

});







});
