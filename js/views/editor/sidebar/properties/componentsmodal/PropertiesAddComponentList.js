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
            console.log('On::ClickedONComponentInModal', event);
            this.setSelected(event.currentTarget);
        },
        /**
         * Callback for the clicked on a component, gets the component with
         * propper id and triggers an event for it
         * @param {DOMnode} node dom node that should be selected
         */
        setSelected: function(node)
        {
            //Unset the old one
            var currentSelected = $('.selected-new-component',this.$el).first();
            currentSelected.removeClass('selected-new-component');
            $(node).addClass('selected-new-component');
            //Send event of the selected
            eventor.trigger('editor.component.showinfo',this.getSelected());
        },
        /**
         * Resets the selected to the first in collection
         */
        resetSelection: function()
        {
            this.setSelected($('li',this.$el).first());
        },
        getSelected: function()
        {
            //Get the correct component
            var id = $('.selected-new-component',this.$el).data('component');
            return editor.components.findWhere({componentId: id});
        }
    });
    return tagItemView;   
});