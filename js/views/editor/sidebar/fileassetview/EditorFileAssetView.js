'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'logic/editor/Editor',
  'views/editor/sidebar/fileassetview/FileAssetItemView',
  'text!views/editor/sidebar/fileassetview/EditorFileAssetViewTemplate.html',
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

    var EditorFileAssetView = Backbone.View.extend({
        id: 'FileAssetViewContainer',
        template: _.template('<span>files</span>'),
        list : editor.assetPipeline.getList(),

        initialize: function() {
            var foo = fileAssetViewTemplate;
            this.listenTo(this.list, 'add', this.addOne);
            this.listenTo(this.list, 'reset', this.addAll);
            this.listenTo(this.list, 'all', this.render);

            this.footer = this.$('footer');
            this.main = $('#main');

            //Todos.fetch();
        },

        // render: function() {
        //     var done = list.done().length;
        //     var remaining = list.remaining().length;

        //     if (Todos.length) {
        //         this.main.show();
        //         this.footer.show();
        //         this.footer.html(this.statsTemplate({done: done, remaining: remaining}));
        //     } else {
        //         this.main.hide();
        //         this.footer.hide();
        //     }

        //     this.allCheckbox.checked = !remaining;
        // },

        addOne: function(todo) {
            console.log('adding to view');
            var view = new ItemView({model: todo});
            this.$el.append(view.render().el);
        },

        addAll: function() {
            this.list.each(this.addOne, this);
        }

    });

    return EditorFileAssetView;
  
});
