angular.module('starter.services', [])

.factory('Members', function() {
  var User = Parse.Object.extend('_User');
  var query = new Parse.Query(User);
  var users = query.find();

  return {
    all: function() {
      return users;
    },
    get: function() {

    }
  }
})

.factory('Categories', function() {
  // Might use a resource here that returns a JSON array

  var EventCategory = Parse.Object.extend("EventCategory");
  var query = new Parse.Query(EventCategory);
  var categories = query.find();

  // Some fake testing data
  return {
    all: function() {
      return categories;
    },
    get: function(categoryId) {
      var result = categories.then(function(results){
          for (var i = 0; i < results.length; i++) {
              return results[categoryId].toJSON();
          }
      });
      console.log(result);
      return result;
    }
  }
})

.factory('Events', function() {

  var EventCategory = Parse.Object.extend("EventCategory");
  var Event = Parse.Object.extend("Event");
  var query = new Parse.Query(Event);
  var events = query.find().then(
    function(results) {
      return results;
    },
   function(error) {
      return error;
    }
  );

  return {
    all: function() {
      return events;
    },
    get: function(categoryId) {      
      return events;
    },
    findOne: function(eventId) {
      console.log(eventId);
      var events = query.get(eventId, {
        success: function(result) {
          return result;
        },
        error: function(error) {

        }
      })
      return events;
    }
  }

})
;