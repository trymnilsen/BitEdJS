'use strict';

define([
'jquery',
'underscore',
'backbone',
'views/editor/sidebar/properties/components/PropertiesComponentItemView'
], 
function($,
_, 
Backbone,
Itemview
){
    var propComponentsView = Backbone.View.extend({
        className: 'properties-components-container',
        //Expected format of single component
        /**
         * Components storage for this view
         * @type {EditorComponent}
         */
        components: [],
        /**
         * Set the components for this view, replacing any old currently in view
         * @param {Collection} components the new component list to show and 
         * also listen for newly added components on
         */
        setComponents: function(components) {
            this.stopListening();
            this.components = components;
            //Listen for new events
            //this.listenTo(this.components, 'add', this.addOne);
            //this.listenTo(this.components, 'reset', this.addAll);
            //this.listenTo(this.components, 'all', this.addOne);

        	this.render();
        },

        render: function(){

            this.$el.html('');
        	for (var i = 0; i < this.components.length; i++) {
        		var itemView = new Itemview();
        		this.$el.append(itemView.render().el);
        		console.log('Added Component');
        	}
            return this;
        },
        addOne: function(test, foo, bar){
            console.log('ADDING COMPONENT IN VIEW : ', test, foo, bar);
        },
        addAll: function(allNew){
            console.log('ADDING ALL IN VIEW: ',allNew);
        }

    });
    return propComponentsView;   
});