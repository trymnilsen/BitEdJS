'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/editor/sidebar/fileassetview/FileAssetItemTemplate.html'
], function($, _, Backbone, ItemTemplate){

    var FileItemView = Backbone.View.extend({

        tagName:  'li',
        className: 'file-asset-item-wrapper',
        template: _.template(ItemTemplate),
     
        // events: {
        //     'click .toggle'   : 'toggleDone',
        //     'dblclick .view'  : 'edit',
        //     'click a.destroy' : 'clear',
        //     'keypress .edit'  : 'updateOnEnter',
        //     'blur .edit'      : 'close' 
        // },

        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },

        render: function() {
            var templateData = this.model.toJSON();
            this.$el.html(this.template(templateData));
            return this;
        },

        clear: function() {
            this.model.destroy();
        }

    });

    return FileItemView;
  
});
