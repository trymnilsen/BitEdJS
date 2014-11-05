'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'eventor',
  'text!views/app/menu/AppMenuButtonTemplate.html'
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
            eventor.trigger('app.menu.open');
        }
    });

    return EditorNavbarButtonView;
});