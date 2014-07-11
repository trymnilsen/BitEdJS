'use strict';

define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var EditorScreenInstanceModel = Backbone.Model.extend({

        defaults : {
          positionX       : 0,
          positionY       : 0,
          assetReference  : null
        },  

        initialize: function(options) {
            this.positionX = options.positionX; 
            this.positionY = options.positionY; 
            this.assetReference = options.assetReference;
        }

    });

    return EditorScreenInstanceModel;

});
