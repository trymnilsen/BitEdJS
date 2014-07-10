'use strict';

define([
  'phaser',
  'underscore'
], function(phaser,_){

  var PhaserInstance = {

    game : null,

    attatch: function(domID) {
      if(domID === '' || domID === undefined)
      {
        console.log('phaser attach id not defined');
        return;
      }
      this.game = new phaser.Game(600, 480, phaser.AUTO, domID, 
          {
            preload: _.bind(this.preload,this),
            create: _.bind(this.create,this)
          });
    },
    preload: function(){

    },
    create: function(){

    }

  };

  return PhaserInstance;
  
});
