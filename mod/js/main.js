"use strict";
// Filename: main.js

// Require.js allows us to configure shortcut alias
require.config({
  "paths": {
    "jquery": "libs/jquery/jquery-2.1.1",
    "jquery.layout": "libs/jquerylayout/jquery.layout-latest",
    "jqueryui":"libs/jqueryui/jquery-ui-latest",
    "underscore": "libs/underscore/underscore",
    "backbone": "libs/backbone/backbone"
  },
  "shim": {
  	"jquery.layout" : ["jquery","jqueryui"]
  }

});

require([
  // Load our app module and pass it to our definition function
  "app"
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});