'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'views/app/menu/AppMenuOverlayView',
  'eventor',
  'text!views/app/menu/AppMenuViewTemplate.html'
], function($, _, Backbone, OverlayView, eventor, sidebarTemplate){

  var AppMenuView = Backbone.View.extend({
    el: $('#sidebar'),
    overlayElement: null,

    render: function(){
        //Set the content loaded via text!.js
        this.$el.html(sidebarTemplate);
        //Create the overlay enabling us to close 
        //the menu pressing outside it
        var overlay = new OverlayView();
        overlay.closeCallback = _.bind(this.closeMenu, this);
        overlay.render();
        //Set it
        this.overlayElement = overlay;
        //register
        eventor.on('app.menu.open', _.bind(this.openMenu,this));
    },
    closeMenu: function()
    {
        console.log('hiding!');
        jQuery('#container').removeClass('open-sidebar');
    },
    openMenu: function(evt)
    {
        //Open the menu
        jQuery('#container').addClass('open-sidebar');
        this.overlayElement.showOverlay();
        console.log('Loooool');
        console.log(evt);
    }

  });

  return AppMenuView;
  
});