'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'eventor',
  'text!views/editor/navbar/EditorNavbarButtonTemplate.html'
], function(
    $, 
    _, 
    Backbone,
    eventor,
    buttonTemplate
    ){

    var EditorNavbarButtonView = Backbone.View.extend({
        
        events: {
            'click' : 'buttonClicked'
        },
        render: function()
        {
            this.$el.html(buttonTemplate);
            return this;
        },
        buttonClicked: function()
        {
            
        }
    });

    return EditorNavbarButtonView;
});