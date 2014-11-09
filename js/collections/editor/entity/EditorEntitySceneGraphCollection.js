'use strict';

define([
  'underscore',
  'backbone',
  'logic/editor/Editor',
  'models/editor/entity/EditorEntityModel'
], function(_, Backbone, editor, Entity){
    var EditorComponentCollection = Backbone.Collection.extend({
        model: Entity

    });
 
    return EditorComponentCollection;
});
