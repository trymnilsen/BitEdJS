'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'eventor',
  'logic/runtime/PhaserInstance',
  'views/editor/document/screen/EditorScreenControlsView',
  'views/app/overlay/GeneralIconOverlayView',
  'jqueryui'
], function($, 
            _, 
            Backbone, 
            eventor, 
            PhaserInstance,
            ScreenControls,
            OverlayView){

  var EditorScreenView = Backbone.View.extend({
    el                          : $('<div></div>')
                                    .addClass('full-space-wrapper'),
    renderContainer             : null,
    controlsContainer           : null,
    renderContainerDropVisual   : null,
    phaserScreen                : null,
    //Functions
    render: function(){
        //Create constructs
        var screenControls = new ScreenControls();
        this.renderContainerDropVisual = new OverlayView();   
        this.renderContainerDropVisual.setIcon('fa fa-plus-square');
        this.renderContainerDropVisual.setText('Add Asset');
        this.renderContainer = $('<div></div>')
                                    .attr('id','editorScreenViewDiv')
                                    .addClass('relative-wrapper');
        this.controlsContainer  = $('<div></div>')
                                    .addClass('editor-document-controls');
        //Append our two containers
        this.$el.append(this.renderContainer);
        this.$el.append(this.controlsContainer);
        this.renderContainer.append(this.renderContainerDropVisual.el);
        this.controlsContainer.append(screenControls.el);
        //Render the controls view
        screenControls.render();
        this.renderContainerDropVisual.render();
        //Set up the render view responsible for displaying our game :)
        //hooks into its own event (dispatched in EditorLayoutView) upon resizing
        //enabling us to handle the resize (with camera/render etc) ourself
        eventor.on('editor.layout.resize.center',_.bind(this.resizeScreenView,this));
        eventor.on('editor.layout.finished',_.bind(this.createScreenView,this));
        //Set our size
        //Set our render area as droppable
        this.renderContainer.droppable({
            /*accept  : '.editor-file-list-entry',*/
            over    : _.bind(this.dragOver,this),
            out     : _.bind(this.dragOut,this),
            drop    : _.bind(this.onDropped,this)
        });
    },
    createScreenView: function()
    {
        this.phaserScreen = new PhaserInstance();
        var w = $('#editorScreenViewDiv').width();
        var h = $('#editorScreenViewDiv').height();
        this.phaserScreen.attach('editorScreenViewDiv',w,h);
    },
    hideDropVisuals: function()
    {
        this.renderContainerDropVisual.hideOverlay();
    },
    //event handlers
    //Callback for the layout resize event
    resizeScreenView: function(evt)
    {
        console.log(evt);
        //Calculates the size of our containers as we do not want to use css to make
        //sure our containers are correct size since this makes the render size 
        //different from the element size
        var renderHeight = evt.height - this.controlsContainer.height();
        var renderWidth = evt.width;

        this.phaserScreen.resizeRender(renderWidth,renderHeight);
    },
    //Callback for the hover/drag over
    dragOver: function()
    {
        this.renderContainerDropVisual.showOverlay();
    },
    dragOut: function()
    {
        this.hideDropVisuals();
    },
    onDropped: function(event, ui)
    {
        this.hideDropVisuals();
    }
  });

  return EditorScreenView;
  
});
