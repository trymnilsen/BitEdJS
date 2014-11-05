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
        setViewComponents: function(components) {
            this.stopListening();
            this.components = components;
            //Listen for new events
            this.listenTo(this.components, 'add', this.addOne);
            this.listenTo(this.components, 'reset', this.render);
            //this.listenTo(this.components, 'all', this.addOne);

        	this.render();
        },

        render: function(){
            
            this.$el.html('');
        	for (var i = 0; i < this.components.length; i++) {
                var comp = this.components.at(i);
        		var itemView = new Itemview();
        		this.$el.append(itemView.render(comp).el);
        	}
            return this;
            
        },
        addOne: function(model, collection, options){
            console.log('On::AddOneComponent', model, collection, options);
            var itemView = new Itemview();
            this.$el.append(itemView.render(model).el);
        },
        addAll: function(){
            console.log('On:AddAll', arguments);
        }

    });
    return propComponentsView;   
});