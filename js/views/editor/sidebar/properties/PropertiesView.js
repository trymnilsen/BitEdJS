'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'eventor',
  'logic/editor/Editor',
  'views/editor/sidebar/properties/tag/PropertiesTagView',
  'views/editor/sidebar/properties/components/PropertiesComponentView',
  'text!views/editor/sidebar/properties/PropertiesViewTemplate.html',
  'text!views/editor/sidebar/properties/PropertiesNoneSelectedTemplate.html'
], 
function($,
 _, 
 Backbone,
 eventor,
 editor,
 TagView,
 ComponentView,
 viewTemplate,
 notificationTemplate
 ){
    var propertiesView = Backbone.View.extend({
        viewConstants : editor.constants.propertiesView,
        id: 'editorPropertiesView',
        template: _.template(viewTemplate),
        tagView: {},
        componentsView: {},
        activeNode: {
            tags : [],
            components : [],
            type: '',
            name: editor.constants.propertiesView.noItemSelectedString
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
            //Give the current settings to our subviews
            this.tagView.tags = this.activeNode.tags;
            this.componentsView.components = this.activeNode.components;
            //Render and append them
            $('.properties-lower-tags',this.$el).html(this.tagView.render().el);
            $('.editor-properties-components',this.$el).prepend(this.componentsView.render().el);
            $('.emptyPromptContainer',this.$el).html(notificationTemplate);
            //Only show the empty promp if we dont have any selected ones
            if(this.activeNode.name === this.viewConstants.noItemSelectedString)
            {
                $('.emptyPromptContainer',this.$el).show();
            }
            else
            {
                $('.emptyPromptContainer',this.$el).hide();
            }
            //Set the appropriate icon
            //We dont know what icon class is already set. We could parse it
            //but we also know what other classes are supposed to be there 
            //asside from the icon class, so why not just clear it and set our
            //wanted icon class
            var newClassName = 'fa fa-fx ';
            if(this.activeNode.type in this.viewConstants.itemIcons)
            {
                newClassName+=this.viewConstants.itemIcons[this.activeNode.type];
            }
            else
            {
                newClassName+='fa-question-circle';
            }
            newClassName+=' property-selected-icon';
            $('.property-selected-icon',this.$el).attr("class", newClassName);
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
        }
    });
    return propertiesView;   
});