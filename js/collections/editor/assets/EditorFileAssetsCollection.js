'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'models/editor/assets/EditorFileAssetModel'
], function($, _, Backbone, FileAssetsModel){
  var EditorFileAssetsCollection = Backbone.Collection.extend({
    model: FileAssetsModel,
    
    initialize: function(){

      //this.add([project0, project1, project2, project3, project4]);

    }

  });
 
  return EditorFileAssetsCollection;
});
