'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'logic/editor/components/ComponentResolver',
  'text!views/editor/sidebar/properties/componentsmodal/PropertiesAddComponentListItemTemplate.html'
], 
function($,
 _, 
 Backbone,
 ComponentsResolver,
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
            var componentsResolver = new ComponentsResolver();
            var templateData = this.template(
            {
                 components: componentsResolver.getAllComponents()
            });
            this.$el.html(templateData);
            //now that our data is there try to attach the eventhandlers
            this.delegateEvents();
            return this;
        },
        /**
         * Callback for a li element  (a component that is pressed)
         * @param  {object} event the click event
         * @return {[type]}       [description]
         */
        selectComponent: function(event)
        {
            console.log(event);
        }
    });
    return tagItemView;   
});