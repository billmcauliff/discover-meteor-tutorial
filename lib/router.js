Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: '404',
    waitOn: function() {
        return [Meteor.subscribe('posts'),Meteor.subscribe('select')];
    }
});

// Tutorial Routes
Router.route('/',{
    name: 'postsList'});

Router.route('/posts/:_id', {
    name: 'postPage',
    data: function() {
        return Posts.findOne(this.params._id);
    }
});

Router.route('/posts/:_id/edit', {
    name: 'postEdit',
    data: function() {
        return Posts.findOne(this.params._id);
    }
});



Router.route('/submit', {name: 'postSubmit'});

var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
        this.render('accessDenied');
        }
    } else {
        this.next();
    }
}


// My Test Routes
Router.route('/select/:_id', {
    name: 'selectPage',
    data: function() {
        return Select.findOne(this.params._id);
    }
});

Router.onBeforeAction('dataNotFound', {
    only: 'postPage'
});
Router.onBeforeAction(requireLogin, {
    only: 'postSubmit'
});