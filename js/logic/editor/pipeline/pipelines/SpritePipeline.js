'use strict';

define([
    'underscore',
    'eventor',
    'collections/editor/assets/EditorFileAssetsCollection'
], 
function (
    _,
    eventor,
    AssetCollection
    ) {

    function SpritePipeline()
    {
        this.extensions = ['png','jpg'];
        this.assetCollection = new AssetCollection();
        this.pushFile = function(fileObject)
        {
            console.log('adding file via SpritePipeline: ',fileObject);
        }

    }

    return SpritePipeline;
});