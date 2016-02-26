Router.configure({
    layoutTemplate: 'mainLayout'
});


Router.route('/', {
    name: 'accueil',
    data: function(){
        var posts = Posts.find();
        var estVide = true ;
        if ( Posts.findOne() == null ){
        estVide = false ;
        }
        var ses = Session.get("Inviter"); 
         console.log(ses);
        var estVideSess = true ;
         console.log(estVideSess);
        if ( Session.get("Inviter") == null ){
        estVideSess = false ;
         console.log(estVideSess);
        }
 

        return {
            posts: posts,
            estVide: estVide,
            sessionInviter : Session.get("Inviter"),
            estVideSess : estVideSess 
        };
    },
    waitOn: function(){
        return Meteor.subscribe("allPostHeaders");
    }
});

Router.route('/Completed', {
    name: 'Completed',
    data: function(){
        var posts = Posts.find();
        var estVide = true ;
        if ( Posts.findOne() == null ){
        estVide = false ;
        }
        var ses = Session.get("Inviter"); 
         console.log(ses);
        var estVideSess = true ;
         console.log(estVideSess);
        if ( Session.get("Inviter") == null ){
        estVideSess = false ;
         console.log(estVideSess);
        }
        
        return {
            posts: posts,
            estVide: estVide,
            sessionInviter : Session.get("Inviter"),
            estVideSess : estVideSess 
        };
    },
    waitOn: function(){
        return Meteor.subscribe("allPostHeaders");
    }
});

Router.route('/Active', {
    name: 'Active',
    data: function(){
        var posts = Posts.find();
        var estVide = true ;
        if ( Posts.findOne() == null ){
        estVide = false ;
        }
        var ses = Session.get("Inviter"); 
         console.log(ses);
        var estVideSess = true ;
         console.log(estVideSess);
        if ( Session.get("Inviter") == null ){
        estVideSess = false ;
         console.log(estVideSess);
        }
        
        return {
            posts: posts,
            estVide: estVide,
            sessionInviter : Session.get("Inviter"),
            estVideSess : estVideSess 
        };
    },
    waitOn: function(){
        return Meteor.subscribe("allPostHeaders");
    }
});

Router.route('/Login', {
    name: 'Login'
});

Router.route('/Inscription', {
    name: 'Inscription'
});
