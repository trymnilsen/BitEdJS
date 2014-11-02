'use strict';

define([
  'underscore',
  'backbone',
  'models/editor/component/EditorComponent'
], function(_, Backbone, Component){
    var EditorComponentCollection = Backbone.Collection.extend({
        model: Component

    });
 
    return EditorComponentCollection;
});
