'use strict';

define([
  'underscore',
  'phaser'
], function(_){

  var PhaserInstance = {

    game : null,

    attach: function(domID) {
      if(domID === '' || domID === undefined)
      {
        console.log('phaser attach id not defined');
        return;
      }

      this.game = new Phaser.Game(600, 480, Phaser.AUTO, domID, 
          {
            preload: _.bind(this.preload,this),
            create: _.bind(this.create,this)
          });

    },
    preload: function(){
        this.game.load.image('logo','phaserio/phaser.png');
        this.game.load.image('grid','imgs/editor/screen/grid.png');
    },
    create: function(){
            var grid = this.game.add.tileSprite(0,0,600,480,'grid');
            var logo = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'logo');

            logo.anchor.setTo(0.5, 0.5);
            logo.inputEnabled = true;
            logo.input.enableDrag(true);
    },
    testfunc: function()
    {
        console.log('helloooo click on img');
    },
    resizeRender: function(w, h)
    {
        this.game.render.resize(w,h);
        //this.game.scale.refresh();
    }
  };

  return function() { return PhaserInstance; }
  
});
