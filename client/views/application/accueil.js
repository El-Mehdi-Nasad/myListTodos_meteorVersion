
Template.accueil.helpers({
    existDateFin: function(){
        var tab = Session.get("Inviter");
        for (elmt in tab){
       if (tab[elmt].estDateFin ){
        return true;}}
       return false;
    }
});
    

