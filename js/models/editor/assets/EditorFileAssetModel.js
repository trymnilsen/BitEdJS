'use strict';

define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var EditorFileAssetModel = Backbone.Model.extend({

        defaults : {
          fileName : 'unknown',
          modified : 'no time',
          size     : '0'
        },  

        initialize: function(options) {
            this.fileName = options.fileName; 
        }

    });

    return EditorFileAssetModel;

});
