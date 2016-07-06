Template.errors.helpers({
    errors: function() {
        return Errors.find();
    }
});
// Comtrols how long error notifications remain on the screen
Template.error.onRendered(function() {
    var error = this.data;
    Meteor.setTimeout(function() {
        Errors.remove(error._id);
    },  1500); //1.5 seconds before the notification disappears
});