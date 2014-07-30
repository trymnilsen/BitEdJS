'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'eventor',
  'views/app/overlay/GeneralIconOverlayView'
], function($, _, Backbone, eventor, OverlayView){

  var EditorDropAssetView = Backbone.View.extend({
    //members
    el                  : $('#container'),
    windowInitialized   : false,
    overlayInitialized  : false,
    dropZoneInitialized : false,
    dropOverlay         : null,
    dropZone            : null,
    dropZoneVisual      : null,
        //Subscribe to events
    // events : {
    //     'click' : 'handleClickOverlay'
    // },

    //Functions
    render: function(){
        //Create drop overlayes (we use two in order to handle the events)
        this.dropOverlay = $('<div></div>').attr('id', 'editorFileDropOverlay').hide();
        this.dropZone = new OverlayView();//$('<div></div>').attr('id', 'editorFileDropZone').hide();
       
       // this.dropZoneVisual = 
        this.dropZone.setIcon('fa fa-paperclip');
        this.dropZone.setText('Import File');
        
        //Attach event-listeners
        //For window
        jQuery(window).on('dragover',_.bind(this.onDragOverWindow,this))
            .on('dragleave',_.bind(this.onDragLeaveWindow,this))
            .on('drop',_.bind(this.onDropWindow,this));
        //DropOverlay <- stealing our events
        this.dropOverlay.on('dragenter',_.bind(this.onDragEnterOverlay,this))
            .on('dragleave',_.bind(this.onDragLeaveOverlay,this))
            .on('drop',_.bind(this.onDropOverlay,this));
        
        this.dropZone.render();
        this.dropZone.hideOverlay();
        //Dropzone <- Visual Part
        this.dropZone.on('dragenter',_.bind(this.onDragEnterDropZone,this))
            .on('dragleave',_.bind(this.onDragLeaveDropZone,this))
            .on('drop',_.bind(this.onDropDropZone,this));

        //this.dropZone.render();

        //Append
        jQuery(document.body).append(this.dropOverlay);
        jQuery(document.body).append(this.dropZone.$el);

        


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
        this.dropZone.showOverlay();
        console.log('Over window');
    },
    onDragLeaveWindow: function(){
        if (this.overlayInitialized || this.dropZoneInitialized) {
            return;
        }

            console.log('leaving window');
            this.windowInitialized = false;
            this.dropOverlay.hide();
            this.dropZone.hideOverlay();

    },
    onDropWindow: function(evt){
        evt.preventDefault();

        this.windowInitialized = false;
        this.overlayInitialized = false;
        this.dropZoneInitialized = false;

        this.dropOverlay.hide();
        this.dropZone.hideOverlay();
    },
    onDropOverlay: function(evt){
        evt.preventDefault();
    },
    onDragLeaveOverlay: function(){
        if(!this.dropZoneInitialized)
        {
            this.dropZone.hideOverlay();
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
        evt.preventDefault();
        console.log(evt.originalEvent.dataTransfer);
        eventor.trigger('editor.assets.dropRequest',evt.originalEvent.dataTransfer.files);

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