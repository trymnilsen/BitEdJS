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
    AssetModel
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
            console.log('On::PushFileToSpritePipeline {file} ',fileObject);
            var alreadyAddedFile = getLoadedFile(fileObject);
            if(alreadyAddedFile !== null)
            {
                if(fileObject.lastModifiedDate>alreadyAddedFile.lastModifiedDate)
                {
                    console.log('Something happended here?');        
                }
            }
            var model = new AssetModel({
                fileName: fileObject.name,
                size: fileObject.size,
                lastModifiedDate: fileObject.lastModifiedDate
            });
            this.assetCollection.add(model);

        }

    }

    return SpritePipeline;
});