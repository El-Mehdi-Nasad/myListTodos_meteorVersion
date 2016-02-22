

Template.ifCurrentUserActive.events({
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
	if( newtodo != "" ){	
		var post = {
				newtodo: newtodo,
                                datePost: datePost,
				etatCheckBox: false
		}
        
           if (Posts.findOne({newtodo: newtodo}) == null ){
                 Posts.insert(post , function(err, id){
	if(err){
		alert(err.reason)
		$("form input").val("");
	}
	else{
		$("form input").val("");
	    }
                 });
          }  
	else{
		$("form input").val("");
	    }}
	},

      "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
      Posts.update(this._id, {
        $set: {etatCheckBox: ! this.etatCheckBox}
      });
    },

      "click .delete": function () {
      Posts.remove(this._id);
    }

});
