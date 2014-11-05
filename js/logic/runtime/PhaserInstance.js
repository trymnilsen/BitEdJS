'use strict';

define([
  'underscore',
  'logic/editor/runtimebridge/PhaserRuntimeBridge',
  'phaser'
], function(_, RuntimeBridge){

  var PhaserInstance = {

    game : null,
    grid : null,
    w : 0,
    h : 0,
    phaserBridge: null,
    attach: function(domID, w, h) {
      if(domID === '' || domID === undefined)
      {
        console.warn('Phaser attach-id was not defined!');
        return;
      }
      this.w = w;
      this.h = h;
      console.log('Initialize::SetPhaserEditorInstanceSize {Width/Height} ' + w + '/'+ h);
      this.game = new Phaser.Game(w, h, Phaser.AUTO, domID, 
          {
            preload: _.bind(this.preload,this),
            create: _.bind(this.create,this)
          });
      //Create a bridge instance enabling a decoupled communication between our
      //editor and running game instance
      this.phaserBridge = new RuntimeBridge(this.game);
    },
    preload: function(){
        this.game.load.image('logo','phaserio/phaser.png');
        this.game.load.image('grid','imgs/editor/screen/grid.png');
        this.game.load.image('entityTemplate','imgs/editor/screen/32entitybackground.png');
    },
    create: function(){
            this.grid = this.game.add.tileSprite(0,0,this.w,this.h,'grid');
            var logo = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'logo');

            logo.anchor.setTo(0.5, 0.5);
            logo.inputEnabled = true;
            logo.input.enableDrag(true);
            logo.input.enableSnap(32,32,true,true);
    },
    resizeRender: function(w, h)
    {

        console.log('On::ResizePhaserInstance {width/height}',w,h);
        this.game.width = w;
        this.game.height = h;

        this.game.canvas.width = w;
        this.game.canvas.height = h;
        this.game.world.setBounds(0,0, 2000, 2000);
        this.game.scale.width = w;
        this.game.scale.height = h;

        this.game.renderer.resize(w,h);
        this.game.scale.setSize();
        this.game.camera.setSize(w,h);

        this.grid.destroy();
        this.grid = this.game.add.tileSprite(0,0,w,h,'grid');
        //this.game.render.resize(w,h);
        //this.game.scale.refresh();
    }
  };

  return function() { return PhaserInstance; }
  
});
