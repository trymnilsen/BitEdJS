'use strict';
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    'jquery': 'libs/jquery-min',
    'underscore': 'libs/underscore-min',
    'backbone': 'libs/backbone-min',
    'templates': '../templates', 
    'jquery.layout': 'libs/jquery.layout-latest',
    'jqueryui':'libs/jqueryui',
    'bootstrap' : 'libs/bootstrap'
  },

  shim : {
    'bootstrap' : ['jquery'],
    'jquery.layout' : ['jquery', 'jqueryui']
  }

});

require([
  // Load our app module and pass it to our definition function
  'app'
], function(App){
  // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});
