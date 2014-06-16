'use strict';
// Filename: main.js

// Require.js allows us to configure shortcut alias
require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    jquerylayout: 'libs/jquerylayout/jquery.layout-latest',
    jqueryui:'libs/jqueryui/jquery-ui-latest',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone-min',
    templates: '../templates'
  },
  shim: {
    jquerylayout : ['jquery','jqueryui']
  }


});

require([
  // Load our app module and pass it to our definition function
  'app',

], function(App){
  // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});
