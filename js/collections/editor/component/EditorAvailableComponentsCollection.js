'use strict';

define([
  'underscore',
  'backbone',
  'models/editor/component/EditorComponent',
  'models/editor/component/EditorComponentFactory'
], function(_, Backbone, Component, Factory){
    var EditorComponentCollection = Backbone.Collection.extend({
        model: Component,
      
        initialize: function(){

            this.set(Factory.getAllAvailable());
        }

    });
 
    return EditorComponentCollection;
});
