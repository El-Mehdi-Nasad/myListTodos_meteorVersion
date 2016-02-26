     
Template.ifSession.events({
      "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
                var dateFr =  function() {
                    // on recupere la date
                    var date = new Date();
                    // on construit le message
                    var jour = date.getDate() ;
                    if(jour < 10){
                       jour = "0" + jour;}
                    var message = jour + "/";   // nom du jour
                    var mois = date.getMonth()+1 ;
                    if(mois < 10){
                       mois = "0" + mois;}
                    message += mois + "/";   // mois
                    message += date.getFullYear() + "," + " ";
                    var heure = date.getHours();
                    if(heure < 10){
                       heure = "0" + heure;}
                    message += heure + "h";
                    var minutes = date.getMinutes();
                    if(minutes < 10){
                       minutes = "0" + minutes;}
                    message += minutes + "min";
                    var secondes = date.getSeconds();
                    if(secondes < 10){
                       secondes = "0" + secondes;}
                    message += secondes + "s";
                 return message;
           };

        var tab = Session.get("Inviter");
        for ( elmt in tab ){
          if( tab[elmt].newtodo == this.newtodo ){
            tab[elmt].datePostFin = dateFr(); 
              if( tab[elmt].etatCheckBox){
              tab[elmt].etatCheckBox = false;
                               tab[elmt].estDateFin = false;
          Session.set("Inviter" , tab );}
             else{
              tab[elmt].etatCheckBox = true;
                               tab[elmt].estDateFin = true;
          Session.set("Inviter" , tab );}
               
              }

}},

      "click .delete": function () {
        var tab = Session.get("Inviter");
        for ( elmt in tab ){
          if( tab[elmt].newtodo == this.newtodo ){
            tab.splice(elmt, 1); 
          Session.set("Inviter" , tab );}
              }
           } ,

      "click .deleteAll": function () {
        var tabl = Session.get("Inviter");
         console.log(Session.get("Inviter"));
        
         console.log(tabl);
        for ( elmt in tabl ){
         console.log(elmt);
          if( tabl[elmt].etatCheckBox == true ){
            tabl.splice(elmt, 1);} 
              }
          Session.set("Inviter" , tabl );
           
           },
      "mouseover .progress": function () {
 
        var tab = Session.get("Inviter");
        for ( elmt in tab ){
          if( tab[elmt].newtodo == this.newtodo ){
            tab[elmt].mouseInElmt = false; 
          Session.set("Inviter" , tab );}
              }
           
       },
      "mouseout .souriKharja": function () {
 
        var tab = Session.get("Inviter");
        for ( elmt in tab ){
          if( tab[elmt].newtodo == this.newtodo ){
            tab[elmt].mouseInElmt = true; 
          Session.set("Inviter" , tab );}
              }
           
       },

      "mouseover .input-group-addon": function () {
 
        var tab = Session.get("Inviter");
        for ( elmt in tab ){
          if( tab[elmt].newtodo == this.newtodo ){
            tab[elmt].mouseInElmtFin = false; 
          Session.set("Inviter" , tab );}
              }
           
       },
      "mouseout .souriKharjaFin": function () {
 
        var tab = Session.get("Inviter");
        for ( elmt in tab ){
          if( tab[elmt].newtodo == this.newtodo ){
            tab[elmt].mouseInElmtFin = true; 
          Session.set("Inviter" , tab );}
              }
              }
           

});
