Posts = new Mongo.Collection("posts");

Posts.allow({
    insert: function(userId, doc){
		
	if(doc.newtodo == ""){
        throw new Meteor.Error(403, "Vous n'avez pas l'autorisation d'insérer 1 nouve");
		}
		
		return true;
	},
 
    remove: function(userId, doc){
		
	if(doc.newtodo == ""){
        throw new Meteor.Error(403, "Vous n'avez pas l'autorisation d'insérer 1 nouve");
		}
		
		return true;
	},
    update: function(userId, doc){
		
	if(doc.newtodo == ""){
        throw new Meteor.Error(403, "Vous n'avez pas l'autorisation d'insérer 1 nouve");
		}
		
		return true;
	}

});
