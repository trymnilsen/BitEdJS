'use strict';

define([
    'underscore',
    'collections/editor/assets/EditorFileAssetsCollection'
], 
function (
    _,
    AssetCollection
    ) {
    var pipeLines = [];
    var assetCollection = new AssetCollection();
    var getPipeline = function(fileExtension)
    {
        for (var i = 0; i < pipeLines.length; i++) {
            if(_.contains(pipeLines[i].extensions,fileExtension))
            {
                return pipeLines[i];
            }
        }
        return null;
    };
    var addFile = function(fileObject)
    {
        //Validate file
        if(fileObject.name !== undefined 
            && fileObject.lastModifiedDate !== undefined
            && fileObject.size !== undefined)
        {
            //Get extension
            var re = /(?:\.([^.]+))?$/;
            var ext = re.exec(fileObject.name);

            //Get responsible pipeline
            var pipe = getPipeline(ext);
            //No pipe found
            if(pipe===null)
            {
                console.log('no valid pipeline for <' + ext + '> file: '+fileObject.name);
                return;
            }

            pipe.pushFile(fileObject);
        }
    };

    var assetPipe = {

        addToEditor : function(file)
        {
            if(Array.isArray(file))
            {
                for (var i = 0; i < file.length; i++) {
                    addFile(file[i]);
                }
            }
            else
            {
                addFile(file);
            }
            //is it an array or an object?

            //Get the extention of the file
        },
        addPipeLine : function(pipeline)
        {

        }
    }
    return assetPipe;
});