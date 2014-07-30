'use strict';
// Filename: app.js
define([
  'jquery', 
  'underscore', 
  'backbone',
  'router',
  'logic/editor/pipeline/AssetPipeline' // Request router.js
], function($, _, Backbone, Router, AssetPipeline){

    var initialize = function(){
        // Pass in our Router module and call it's initialize function
        Router.initialize();
    };

    return { 
        initialize  : initialize
    };
});
