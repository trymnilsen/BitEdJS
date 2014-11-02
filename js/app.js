'use strict';
// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'router',
  'eventor' // Request router.js
], function($, _, Backbone, Router, eventor){

    var initialize = function(){
        // Pass in our Router module and call it's initialize function
        Router.initialize();
        eventor.on('all',function() {console.log('Logged event', arguments);});
        //Add Asset pipeline here
    
    };

    return { 
        initialize  : initialize
    };
});
