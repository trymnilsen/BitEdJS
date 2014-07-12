'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'eventor',
  'logic/runtime/PhaserInstance'
], function($, _, Backbone, eventor, PhaserInstance){

  var EditorScreenView = Backbone.View.extend({
    el: $('<div></div>').attr('id','editorScreenViewDiv'),
    phaserScreen : null,
    //Functions
    render: function(){
      eventor.on('editor.layout.resize.center',_.bind(this.resizeScreenView,this));
      this.phaserScreen = new PhaserInstance();
      this.phaserScreen.attach('editorScreenViewDiv');
    },
    //event handlers
    resizeScreenView: function(evt)
    {
        console.log(evt);
        this.phaserScreen.resizeRender(evt.width,evt.height);
    }

  });

  return EditorScreenView;
  
});
