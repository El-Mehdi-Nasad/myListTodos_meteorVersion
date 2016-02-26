
Template.CommunForomSession.events({


    'submit form': function(e){
		e.preventDefault();
		
   
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




             var datePost = dateFr();
	var newtodo = $("input[name='newtodo']").val();
	var timeEstime = $("input[name='timeEstime']").val();
	if( newtodo != "" && timeEstime != "" ){
          if ( timeEstime.indexOf('jours') != -1 ||  timeEstime.indexOf('heures') != -1 || timeEstime.indexOf('minutes') != -1 ){    
          var timeEstimeTab = timeEstime.split(' ');   
          var tempsMilliScds = 0;
              for ( strs in timeEstimeTab ){
                if ( timeEstimeTab[strs].indexOf('minutes') != -1 ){
                    var tempMinutes = parseInt(timeEstimeTab[strs] , 10);
                    if (tempMinutes ){
                    tempMinutes = tempMinutes * 60000 ;
                     tempsMilliScds = tempsMilliScds + tempMinutes;
                     } 
                 }
                if ( timeEstimeTab[strs].indexOf('heures') != -1 ){
                    var tempHeures = parseInt(timeEstimeTab[strs] , 10);
                    if (tempHeures ){
                     tempHeures = tempHeures * 3600000 ;
                     tempsMilliScds = tempsMilliScds + tempHeures;
                     } 
                 }
                if ( timeEstimeTab[strs].indexOf('jours') != -1 ){
                    var tempJours = parseInt(timeEstimeTab[strs] , 10);
                    if (tempJours ){
                     tempJours = tempJours * 86400000 ;
                     tempsMilliScds = tempsMilliScds + tempJours;
                     } 
                 }
                    
               } 
		$("form input").val("");
                var  identifBar = newtodo.substring(0, 2);
                identifBar = identifBar.trim();
              identifBar =identifBar + newtodo.substring(newtodo.lastIndexOf(' ') + 1); 
                var date2 = new Date();
		var post = {
				newtodo: newtodo,
                                datePostDbt: datePost,
				etatCheckBox: false,
                                datePostFin: "",
                                estDateFin: false,
                                tempsEstimer: tempsMilliScds,
                                tempsRestant:  "en traitement",
                                DateDbtNormal: date2, 
                                identifBar : identifBar,
                                mouseInElmt : true,
                                mouseInElmtFin : true,
                                estDateFinClient: true 
		}
        if (Session.get("Inviter") != null ){
        var existDeja = true ;
        var tab = Session.get("Inviter");
        for ( elmt in tab ){
          if( tab[elmt].newtodo == post.newtodo ){
            console.log(tab[elmt].newtodo);
            existDeja = false;
           }}
       console.log(existDeja);
           if ( existDeja ){
           tab.push(post);
           Session.set("Inviter" , tab );
          }
              }
        else{
          var tab2 =[];
          tab2.push(post);
          Session.set("Inviter" , tab2 ); 
            }


          var idProgBar = "#" + identifBar ;
  function timer(n,idProgBar, tempsMilliScds, date2 ,newtodo ) {
    $(idProgBar).css("width", n + "%");
    if(n < 100) {
       
      setTimeout(function() {
        function convertMS(ms) {
  var d, h, m, s;
  s = Math.floor(ms / 1000);
  m = Math.floor(s / 60);
  s = s % 60;
  h = Math.floor(m / 60);
  m = m % 60;
  d = Math.floor(h / 24);
  h = h % 24;
  return { d: d, h: h, m: m, s: s };
};
              
        var calc = date2.getTime();
                var date3 = new Date();
                date3 = date3.getTime();
          calc = date3 - calc ;
       var blabl = tempsMilliScds - calc;
       var nombreMili = convertMS(blabl);
       var stringDeyalTest = nombreMili.d +"d"+ nombreMili.h +"h"+ nombreMili.m +"min"+ nombreMili.s +"s";

        var tabbl = Session.get("Inviter");
        for ( elmt in tabbl ){
          if( tabbl[elmt].newtodo == newtodo ){
              tabbl[elmt].tempsRestant= stringDeyalTest ;
          Session.set("Inviter" , tabbl );
            
           }}
        

       calc = calc / tempsMilliScds;
         calc = calc * 100 ;
         n = calc ;
        
        timer(n, idProgBar, tempsMilliScds, date2 ,newtodo  );
      }, 1000);
    }
    else{
        var tabb = Session.get("Inviter");
        console.log("j suis la :" +  tabb ); 
        for ( elmt in tabb ){
          if( tabb[elmt].newtodo == newtodo ){
            if(!(tabb[elmt].etatCheckBox)){
              tabb[elmt].etatCheckBox = true;
                               tabb[elmt].estDateFin = true;
                               tabb[elmt].estDateFinClient = false;
                               tabb[elmt].datePostFin = dateFr();
          Session.set("Inviter" , tabb );}
            
           }}
       return; 
          }
  }
           timer(0, idProgBar, tempsMilliScds,date2 ,newtodo  ); 
}
}
	}



});

Template.CommunForomSession.helpers({
   TestestVideSess: function(){
         var tab = Session.get("Inviter"); 
     console.log(tab[0]);
     if ( tab[0]  ){
        return true;}
     else return false;
    }
});

