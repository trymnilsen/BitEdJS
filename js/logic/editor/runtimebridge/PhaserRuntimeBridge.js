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
        eventor.on('editor.entity.add',_.bind(this.addNewEntity,this));
        this.gameRef = gameInstance;
        this.setUpTimer();
        //The mapping that holds our phaser objects <-> editorEntityObject
        this.PhaserMapping = [];
    }
    PhaserRuntimeBridge.prototype = {
        constructor: PhaserRuntimeBridge,
        /**
         * Adds a new entity to the current phaser instance
         * @param {editorEntity} entity the editorEntity to create and add
         */
        addNewEntity: function(entity)
        {
            //Creating entity in scene :)
            console.log('On::AddNewEntityInBridge {entity}', entity);

            var newEntity = this.gameRef.add.sprite(this.gameRef.world.centerX,this.gameRef.world.centerY,'entityTemplate');
            //Set Anchor
            newEntity.anchor.setTo(0.5, 0.5);
            //Enable input
            newEntity.inputEnabled = true;
            //Enable Dragging
            newEntity.input.enableDrag(true);
            newEntity.input.enableSnap(32,32,true,true);
            //Enable selection by clicking
            newEntity.events.onInputDown.add(this.clickedOnEntity, this);
            newEntity.EditorId = entity;//TODO: Make id based
        },
        clickedOnEntity: function(event)
        {
            //Find the right entity and dispatch and event for this
            //It should be stored on the phaserObject
            console.log('On::ClickOnSpriteInPhaserScene {event}',event);
            eventor.trigger('editor.entity.selected',event.EditorId);
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