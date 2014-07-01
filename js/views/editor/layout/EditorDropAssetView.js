'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone){

  var EditorDropAssetView = Backbone.View.extend({
    //members
    el                  : $('#container'),
    windowInitialized   : false,
    overlayInitialized  : false,
    dropZoneInitialized : false,
    dropOverlay         : null,
    dropZone            : null,
        //Subscribe to events
    // events : {
    //     'click' : 'handleClickOverlay'
    // },

    //Functions
    render: function(){
        //Create drop overlayes (we use two in order to handle the events)
        this.dropOverlay = $('<div></div>').attr('id', 'editorFileDropOverlay').hide();
        this.dropZone = $('<div></div>').attr('id', 'editorFileDropZone').html('drop on me').hide();
        
        //Attach event-listeners
        //For window
        jQuery(window).on('dragover',_.bind(this.onDragOverWindow,this));
        jQuery(window).on('dragleave',_.bind(this.onDragLeaveWindow,this));
        jQuery(window).on('drop',_.bind(this.onDropWindow,this));
        //DropOverlay <- stealing our events
        jQuery(this.dropOverlay).on('dragenter',_.bind(this.onDragEnterOverlay,this));
        jQuery(this.dropOverlay).on('dragleave',_.bind(this.onDragLeaveOverlay,this));
        jQuery(this.dropOverlay).on('drop',_.bind(this.onDropOverlay,this));
        //Dropzone <- Visual Part
        jQuery(this.dropZone).on('dragenter',_.bind(this.onDragEnterDropZone,this));
        jQuery(this.dropZone).on('dragleave',_.bind(this.onDragLeaveDropZone,this));
        jQuery(this.dropZone).on('drop',_.bind(this.onDropDropZone,this));
        //Append
        jQuery(document.body).append(this.dropOverlay);
        jQuery(document.body).append(this.dropZone);

    },
    onDragOverWindow: function(evt){
        evt.preventDefault();
        //If we allready have dragged over the window, we ignore the next setup part
        if(this.windowInitialized)
        {
            return;
        }
        this.windowInitialized = true;
        this.dropOverlay.show();
        this.dropZone.show();
    },
    onDragLeaveWindow: function(){
        if(this.overlayInitialized && this.dropZoneInitialized)
        {
            return;
        }
        this.windowInitialized = false;
        this.dropOverlay.hide();
        this.dropZone.hide();
    },
    onDropWindow: function(evt){
        evt.preventDefault();

        this.windowInitialized = false;
        this.overlayInitialized = false;
        this.dropZoneInitialized = false;

        this.dropOverlay.hide();
        this.dropZone.hide();
    },
    onDropOverlay: function(evt){
        evt.preventDefault();
    },
    onDragLeaveOverlay: function(){
        if(!this.dropZoneInitialized)
        {
            this.dropZone.hide();
        }
        this.overlayInitialized = false;
    },
    onDragEnterOverlay: function(){
        if(this.overlayInitialized)
        {
            return;
        }
        this.overlayInitialized = true;
    },
    onDropDropZone: function(evt)
    {
        console.log('File was dropped!');
        console.log(evt);
        this.dropZoneInitialized = false;
    },
    onDragLeaveDropZone: function()
    {
        this.dropZoneInitialized = false;
    },
    onDragEnterDropZone: function()
    {
        this.dropZoneInitialized = true;
    }
  });

  return EditorDropAssetView;
  
});