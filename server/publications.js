Meteor.publish('posts', function(){
    return Posts.find();
});



Meteor.publish('select', function(){
    return Select.find();
});

