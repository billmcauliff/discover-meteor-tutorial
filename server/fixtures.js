if (Posts.find().count() === 0){
    Posts.insert({
        title: 'Introducing Telescope',
        url: 'http://sachagreif.com/introducing-telescope/'
    });
     Posts.insert({
        title: 'Meteor',
        url: 'http://www.meteor.com'
    });
     Posts.insert({
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
    });

}

if (Select.find().count() === 0){
    Select.insert({
        location: 'Lockhart',
        zipcode: '32810'
    });
     Select.insert({
        location: 'College Park',
        zipcode: '32804'
    });
     Select.insert({
        location: 'Hiawassee',
        zipcode: '32818'
    });

}