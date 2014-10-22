'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'logic/editor/Editor',
  'views/editor/sidebar/fileassetview/EditorFileAssetList',
  //Non argument load globaly
  'bootstrap',
  'jqueryui'
], function(
    $,
    _, 
    Backbone, 
    editor,
    AssetList
    ){

    var EditorFileAssetView = Backbone.View.extend({
        id: 'FileAssetViewContainer',
        list : editor.assetPipeline.getList(),

        render: function() {
            var assetList = new AssetList();
            this.$el.append(assetList.el);
            return this;
        }
    });

    return EditorFileAssetView;
  
});
