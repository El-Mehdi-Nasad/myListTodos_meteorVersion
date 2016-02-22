Meteor.publish("allPostHeaders", function(){
    return Posts.find({});
});
