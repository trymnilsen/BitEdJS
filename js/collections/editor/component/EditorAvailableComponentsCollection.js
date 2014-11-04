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
            var componentFactory = new Factory();         
            this.set(componentFactory.getAllAvailable());
        }

    });
 
    return EditorComponentCollection;
});
