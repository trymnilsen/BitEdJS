'use strict';

define([
'jquery',
'underscore',
'backbone'
], 
function($,
_, 
Backbone
){
    var propComponentsView = Backbone.View.extend({
        id: 'viewDomId',
        className: 'viewClassName',
        components: [],
        //Expected format of single component
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
        },

        render: function(){
        	// for (var i = 0; i < components.length; i++) {
        	// 	components[i].
        	// }
            return this;
        },

    });
    return propComponentsView;   
});