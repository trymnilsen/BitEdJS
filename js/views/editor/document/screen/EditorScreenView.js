'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'eventor',
  'logic/runtime/PhaserInstance',
  'views/editor/document/screen/EditorScreenControlsView'
], function($, 
            _, Backbone, 
            eventor, 
            PhaserInstance,
            ScreenControls){

  var EditorScreenView = Backbone.View.extend({
    el                  : $('<div></div>').addClass('full-space-wrapper'),
    renderContainer     : null,
    controlsContainer   : null,
    phaserScreen        : null,
    //Functions
    render: function(){
        var screenControls = new ScreenControls();
        this.renderContainer = $('<div></div>').attr('id','editorScreenViewDiv');
        this.controlsContainer = $('<div></div>').addClass('editor-document-controls');
        //Append our two containers
        this.$el.append(this.renderContainer);
        this.$el.append(this.controlsContainer);
        this.controlsContainer.append(screenControls.el);
        screenControls.render();
        //Set up the render view responsible for displaying our game :)
        //hooks into its own event (dispatched in EditorLayoutView) upon resizing
        //enabling us to handle the resize (with camera/render etc) ourself
        eventor.on('editor.layout.resize.center',_.bind(this.resizeScreenView,this));
        this.phaserScreen = new PhaserInstance();
        this.phaserScreen.attach('editorScreenViewDiv');
        //Set our size

    },
    //event handlers
    resizeScreenView: function(evt)
    {
        console.log(evt);
        //Calculates the size of our containers as we do not want to use css to make
        //sure our containers are correct size since this makes the render size 
        //different from the element size
        var renderHeight = evt.height - this.$controlsContainer.height();
        var renderWidth = evt.width;

        this.phaserScreen.resizeRender(evt.width,renderHeight);
    },

  });

  return EditorScreenView;
  
});
