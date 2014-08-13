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
    var propComponentItemView = Backbone.View.extend({
        id: 'viewDomId',
        className: 'viewClassName',
        render: function(){
            return this;
        },
    });
    return propComponentItemView;   
});