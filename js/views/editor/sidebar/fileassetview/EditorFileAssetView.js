'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'models/editor/assets/EditorFileAssetModel',
  'collections/editor/assets/EditorFileAssetsCollection',
  'text!views/editor/sidebar/fileassetview/EditorFileAssetViewTemplate.html',
  //Non argument
  'bootstrap'
], function(
    $, 
    _, 
    Backbone, 
    AssetModel,
    AssetCollection,
    fileAssetView
    ){

  var EditorFileAssetView = Backbone.View.extend({
    el: $('<div></div>').attr('id','FileAssetViewContainer'),

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
        this.$el.find('li').each(function() {
            console.log('attaching event');
            $(this).on('dragstart', function(evt) {
                console.log('drag started');
                evt.foobar = 'test';
                console.log('teehe');
            });
        });
    }

  });

  return EditorFileAssetView;
  
});
