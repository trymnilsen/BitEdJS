'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/editor/sidebar/fileassetview/EditorFileAssetControlsTemplate.html'
], function($, _, Backbone, controlsTemplate){

    var EditorFileAssetControls = Backbone.View.extend({
        className: 'editor-panel-controls editor-file-asset-module',
        render: function(){
            this.$el.html(controlsTemplate);
            return this;
        }

    });

    return EditorFileAssetControls;
  
});
