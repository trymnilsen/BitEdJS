'use strict';

define([
  'underscore',
  'backbone',
  'models/editor/entity/EditorEntityModel'
], function(_, Backbone, Entity){
    var EditorComponentCollection = Backbone.Collection.extend({
        model: Entity

    });
 
    return EditorComponentCollection;
});
