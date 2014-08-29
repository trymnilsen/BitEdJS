'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'eventor',
  'views/editor/sidebar/properties/tag/PropertiesTagView',
  'views/editor/sidebar/properties/components/PropertiesComponentView',
  'text!views/editor/sidebar/properties/PropertiesViewTemplate.html'
], 
function($,
 _, 
 Backbone,
 eventor,
 TagView,
 ComponentView,
 viewTemplate
 ){
    var propertiesView = Backbone.View.extend({
        id: 'editorPropertiesView',
        template: _.template(viewTemplate),
        tagView: {},
        componentsView: {},
        activeNode: {
            name: 'None selected',
            sceneNode: {
                tags : [],
                components : []
            }
        },
        events: {
            'click .editor-properties-add-remove' : 'addComponent'
        },
        initialize: function()
        {
            this.tagView = new TagView();
            this.componentsView = new ComponentView();
            eventor.on('editor.entity.selected',_.bind(this.onSelectedEntityChanged,this));
        },
        render: function(){
            this.$el.html(this.template(this.activeNode));
            console.log('re-rendering');
            this.tagView.tags = this.activeNode.sceneNode.tags;
            this.componentsView.components = this.activeNode.sceneNode.components;
            $('.properties-lower-tags',this.$el).html(this.tagView.render().el);
            $('.editor-properties-components',this.$el).html(this.componentsView.render().el);
            return this;
        },
        addComponent: function()
        {
            console.log('add components');
        },
        onSelectedEntityChanged: function(node){
            console.log('changed to',node);
            this.activeNode = node;
            this.render();
            if(node.name !== 'None selected')
            {
                $('.editor-properties-add-remove',this.$el)
                            .toggleClass('editor-properties-add-remove-active');
                
            }
        }
    });
    return propertiesView;   
});