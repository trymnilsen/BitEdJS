'use strict';

define([
    'underscore',
    'eventor',
    'collections/editor/assets/EditorFileAssetsCollection',
    'models/editor/assets/EditorFileAssetModel'
], 
function (
    _,
    eventor,
    AssetCollection,
    assetModel
    ) {

    function SpritePipeline()
    {
        this.extensions = ['png','jpg'];
        this.assetCollection = new AssetCollection();
        var getLoadedFile = function(file)
        {
            return null;
        }
        this.pushFile = function(fileObject)
        {
            console.log('adding file via SpritePipeline: ',fileObject);
            var alreadyAddedFile = getLoadedFile(fileObject);
            if(alreadyAddedFile !== null)
            {
                if(fileObject.lastModifiedDate>alreadyAddedFile.lastModifiedDate)
                {
                    console.log('hello');        
                }
            }
        }

    }

    return SpritePipeline;
});