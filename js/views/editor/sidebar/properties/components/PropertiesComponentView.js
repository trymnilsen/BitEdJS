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
        components: [],
        compDump: {
        	number: 1,
        	name: 'Physics',
        	sortable: 'true',
        	properties: [
        		{
        			name : 'Movement',
        			type : 'bool',
        			value : true
        		}
        	],
        },
        setComponents: function() {
        	//Clean up old
        	//
        	this.render();
        },

        render: function(){
            this.listenTo(this.components, 'add', this.addOne);
            this.listenTo(this.components, 'reset', this.addAll);
            this.listenTo(this.components, 'all', this.render);

            this.$el.html('');
        	for (var i = 0; i < this.components.length; i++) {
        		var itemView = new Itemview();
        		this.$el.append(itemView.render().el);
        		console.log('Added Component');
        	}
            return this;
        },
        addOne: function(newOne){
            console.log('ADDING COMPONENT IN VIEW : ',newOne);
        },
        addAll: function(allNew){
            console.log('ADDING ALL IN VIEW: ',allNew);
        }

    });
    return propComponentsView;   
});