'use strict';
// Filename: main.js

//Phaser.io globals
var game = {};
// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    'jquery'             : 'libs/jquery-min',
    'underscore'         : 'libs/underscore-min',
    'backbone-dispose'   : 'libs/backbone-disposable-view',
    'backbone'           : 'libs/backbone-min',
    'templates'          : '../templates', 
    'jquery.layout'      : 'libs/jquery.layout-latest',
    'jqueryui'           : 'libs/jqueryui',
    'bootstrap'          : 'libs/bootstrap',
    'phaser'             : 'libs/phaser-io.min',
    'jqtree'             : 'libs/jqtree',
    'toastr'             : 'libs/toastr',
    'dropDownEnhanc'     : 'libs/dropdowns-enhancement',
    'backboneNestedModel': '../bower_components/backbone-nested-model/backbone-nested',
    'backboneToggleModel': '../bower_components/backbone.model.toggle/backbone.model.toggle',
    'bootstrapSweetAlert': '../bower_components/bootstrap-sweetalert/lib/sweet-alert.min'
},

shim : {
    'bootstrap'     : ['jquery'],
    'jquery.layout' : ['jquery', 'jqueryui'],
    'jqtree'        : ['jquery'],
    'toastr'        : ['jquery'],
    'dropDownEnhanc': ['bootstrap'],
    'bootstrapSweetAlert' : ['bootstrap']
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
