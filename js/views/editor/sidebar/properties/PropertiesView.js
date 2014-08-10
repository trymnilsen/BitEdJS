'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'eventor',
  'views/editor/sidebar/properties/tag/PropertiesTagView',
  'text!views/editor/sidebar/properties/PropertiesViewTemplate.html'
], 
function($,
 _, 
 Backbone,
 eventor,
 TagView,
 viewTemplate
 ){
    var propertiesView = Backbone.View.extend({
        id: 'editorPropertiesView',
        template: _.template(viewTemplate),
        tagView: {},
        activeNode: {name: 'None selected'},
        initialize: function()
        {
            this.tagView = new TagView();
            eventor.on('editor.entity.selected',_.bind(this.onSelectedEntityChanged,this));
        },
        render: function(){
            this.$el.html(this.template(this.activeNode));
            console.log('re-rendering');
            $('.properties-lower-tags',this.$el).html(this.tagView.render().el);
            return this;
        },
        onSelectedEntityChanged: function(node){
            console.log('changed to',node);
            this.activeNode = node;
            this.render();
        }
    });
    return propertiesView;   
});