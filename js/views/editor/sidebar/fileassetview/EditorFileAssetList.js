'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'logic/editor/Editor',
  'views/editor/sidebar/fileassetview/FileAssetItemView',
  'text!views/editor/sidebar/fileassetview/EditorFileAssetListTemplate.html',
  //Non argument load globaly
  'bootstrap',
  'jqueryui'
], function(
    $,
    _, 
    Backbone, 
    editor,
    ItemView,
    fileAssetViewTemplate
    ){

    var EditorFileAssetList = Backbone.View.extend({
        id: 'FileAssetViewList',
        tagName: 'ul',
        list : editor.assetPipeline.getList(),

        initialize: function() {
            var foo = fileAssetViewTemplate;
            this.listenTo(this.list, 'add', this.addOne);
            this.listenTo(this.list, 'reset', this.addAll);
            this.listenTo(this.list, 'all', this.render);

            this.footer = this.$('footer');
            this.main = $('#main');
        },

        render: function() {
            return this;
        },

        addOne: function(todo) {
            var view = new ItemView({model: todo});
            this.$el.append(view.render().el);
        },

        addAll: function() {
            this.list.each(this.addOne, this);
        }

    });

    return EditorFileAssetList;
  
});
