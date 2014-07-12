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
    },
    create: function(){
        var logo = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'logo');
            logo.anchor.setTo(0.5, 0.5);
            logo.inputEnabled = true;
            logo.events.onInputDown.add(this.testfunc,this);
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
