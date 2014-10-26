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
    var tagItemView = Backbone.View.extend({

        tagName: 'ul',

        render: function(){
            return this;
        }
    });
    return tagItemView;   
});