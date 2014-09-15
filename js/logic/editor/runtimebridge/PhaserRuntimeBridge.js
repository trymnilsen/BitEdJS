'use strict';

define([
'underscore',
'eventor'
], 
function (
_,
eventor
) {
    /**
     * Constructor for the runtime bridge enabling communication between the
     * game and editor 
     * @param {Phaser.game} gameInstance
     */
    function PhaserRuntimeBridge(gameInstance)
    {
        eventor.on('editor.entity.add',_.bind(this.addEntity));
        this.gameRef = gameInstance;
        this.setUpTimer();
    }
    PhaserRuntimeBridge.prototype = {
        constructor: PhaserRuntimeBridge,
        addEntity: function(entity)
        {
            //Creating entity in scene :)
            console.log('Creating entity in scene', entity);
        },
        getEntityInfo: function(entity)
        {
            eventor.trigger('editor.entity.changed');
        },
        setUpTimer: function()
        {

        }
    }
    return PhaserRuntimeBridge;
});