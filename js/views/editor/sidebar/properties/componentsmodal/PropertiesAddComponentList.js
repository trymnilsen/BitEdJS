'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'eventor',
  'logic/editor/Editor',
  'text!views/editor/sidebar/properties/componentsmodal/PropertiesAddComponentListItemTemplate.html'
], 
function($,
 _, 
 Backbone,
 eventor,
 editor,
 itemTemplate
 ){
    var tagItemView = Backbone.View.extend({

        tagName: 'ul',
        template: _.template(itemTemplate),
        events: {
            'click li' : 'selectComponent'
        },
        /**
         * Renders our list of components as li elements from
         * template loaded by the text requirejs plugin
         * @return {self} returns self for fluency
         */
        render: function(){
            //remove any eventlisteners already there
            this.undelegateEvents();
            //Append a template with out components data
            var templateData = this.template(
            {
                 components: editor.components.models,
                 _: _
            });
            this.$el.html(templateData);
            //now that our data is there try to attach the eventhandlers
            this.delegateEvents();

            //Set the first one as the active
            $('li',this.$el).first().addClass('selected-new-component');
            return this;
        },
        /**
         * Callback for a li element  (a component that is pressed)
         * @param  {object} event the click event
         */
        selectComponent: function(event)
        {
            console.log(event);
            this.setSelected(event.currentTarget);
        },
        setSelected: function(node)
        {
            //Unset the old one
            var currentSelected = $('.selected-new-component',this.$el).first();
            currentSelected.removeClass('selected-new-component');
            $(node).addClass('selected-new-component');
            //Get the correct component
            var componentId             = this.getSelected();
            var selectedComponentModel  = editor.components.get(componentId);
            eventor.trigger('editor.component.showinfo',selectedComponentModel);
        },
        getSelected: function()
        {
            return $('.selected-new-component',this.$el).data('component');
        }
    });
    return tagItemView;   
});