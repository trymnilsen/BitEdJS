'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

  var AppMenuOverlayView = Backbone.View.extend({
    //members
    el : $('<div></div>'),
    closeCallback : function(){},
    //Subscribe to events
    events : {
        'click' : 'handleClickOverlay'
    },

    //Functions
    render: function(){
        //Create overlay element
        this.$el.attr('id','appMenuOverlay');
        //Append
        jQuery('#container').append(this.el);
    },
    showOverlay: function()
    {
        this.$el.addClass('overlay-visible');
    },

    //Event handlers
    handleClickOverlay: function()
    {
        this.$el.removeClass('overlay-visible');
        this.closeCallback();
    }
  });

  return AppMenuOverlayView;
  
});