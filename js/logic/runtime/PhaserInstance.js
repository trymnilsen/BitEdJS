'use strict';

define([
  'phaser'
], function(phaser){

  var TabView = {

    game : null;

    attatch: function(domID) {
      if(domID=='' || domID == undefined)
      {
        console.log('phaser attach id not defined');
        return;
      }
      this.game = new phaser.Game(600, 480, Phaser.AUTO, domID);
    }

  });

  return TabView;
  
});
