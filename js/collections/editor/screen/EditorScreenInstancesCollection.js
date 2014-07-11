'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'models/editor/screen/EditorScreenInstanceModel'
], function($, _, Backbone, ScreenInstanceModel){
  var EditorScreenInstanceCollection = Backbone.Collection.extend({
    model: ScreenInstanceModel,
    
    initialize: function(){

      //this.add([project0, project1, project2, project3, project4]);

    }

  });
 
  return EditorScreenInstanceCollection;
});
