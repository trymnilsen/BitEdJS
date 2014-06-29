'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

  var EditorDropAssetView = Backbone.View.extend({
    //members
    el : $('#container'),

    //Subscribe to events
    // events : {
    //     'click' : 'handleClickOverlay'
    // },

    //Functions
    render: function(){
        //Create drop overlayes (we use two in order to handle the events)
        var dropOverlay = $('<div></div>').attr('id', 'editorFileDropOverlay');
        var dropZone = $('<div></div>').attr('id', 'editorFileDropZone');
        
        //Attach event-listeners
        //For window
        jQuery(window).on('ondragover',_.bind(this.onDragOverWindow,this));
        jQuery(window).on('ondragleave',_.bind(this.onDragLeaveWindow,this));
        jQuery(window).on('ondrop',_.bind(this.onDropWindow,this));
        //DropOverlay <- stealing our events
        //Append
        jQuery('#container').append(this.el);
    },
    onDragOverWindow: function(evt){

    },
    onDragLeaveWindow: function(){

    },
    onDropWindow: function(evt){

    },
    onDropOverlay: function(evt){

    },
    onDragLeaveOverlay: function(evt){

    },
    onDragEnterOverlay: function(evt){

    },
    onDropDropZone: function(evt)
    {

    },
    onDragLeaveDropZone: function(evt)
    {

    },
    onDragEnterDropZone: function(evt)
    {

    }
  });

  return EditorDropAssetView;
  
});