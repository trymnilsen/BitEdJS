'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'models/editor/assets/EditorFileAssetModel',
  'collections/editor/assets/EditorFileAssetsCollection',
  'text!views/editor/sidebar/fileassetview/EditorFileAssetViewTemplate.html',
  //Non argument load globaly
  'bootstrap',
  'jqueryui'
], function(
    $,
    _, 
    Backbone, 
    AssetModel,
    AssetCollection,
    fileAssetView
    ){

    var EditorFileAssetView = Backbone.View.extend({
        id: 'FileAssetViewContainer',

        render: function(){
            var testModel = new AssetModel({fileName : 'tjoo'});
            var testModel2 = new AssetModel({fileName : 'lolhei'});
            var filesCollection = new AssetCollection([testModel,testModel2]);
            this.collection = filesCollection;
            var data = {
                files   : this.collection.models,
                _       : _
            };

            var compiledTemplate = _.template(fileAssetView, data);
            this.$el.append(compiledTemplate);
            //loop through all our list elements now and enable the draggable
            //functionality on them
            //Store our this reference for use in drag events
            var viewInstance = this;

            this.$el.find('li').each(function() {
                //Set as draggable
                $(this).draggable(
                { 
                    helper: 'clone',
                    /*Preferences*/
                    revert          : true,
                    /*helper        : 'clone',*/
                    revertDuration  : 100,
                    /*events*/
                    start           : _.bind(viewInstance.showRemove,viewInstance),
                    stop            : _.bind(viewInstance.hideRemove,viewInstance)
                });
            });
            return this;
        },

    showRemove: function(){
        $('.remove-asset-option').removeClass('remove-asset-option-hidden');
    },
    hideRemove: function(){
        console.log('fsdfsdafd');
         $('.remove-asset-option').addClass('remove-asset-option-hidden');
    }

  });

  return EditorFileAssetView;
  
});
