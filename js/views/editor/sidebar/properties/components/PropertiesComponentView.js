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
        
        render: function(){
            return this;
        },
    });
    return propComponentsView;   
});